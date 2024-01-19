/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import { type Type } from '@nestjs/common'
import { Field, ID, type ReturnTypeFunc } from '@nestjs/graphql'
import { FilterableField, IDField } from '@ptc-org/nestjs-query-graphql'
import { Prop as TypegooseProp } from '@typegoose/typegoose'
import {
  type ArrayPropOptions,
  type BasePropOptions,
  type MapPropOptions,
  type PropOptionsForNumber,
  type PropOptionsForString,
  type VirtualOptions
} from '@typegoose/typegoose/lib/types'
import { type RelationMetadata, type RelationType } from '.'

type TypegooseOptions =
  | BasePropOptions
  | ArrayPropOptions
  | MapPropOptions
  | PropOptionsForNumber
  | PropOptionsForString
  | VirtualOptions

const PRIMARY_KEYS_NAME = '_id'
const PRIMARY_KEYS_TYPE = ID

/**
 * Possible scopes for a property.
 * * extrnal: the property exposed only at GraphQL (but not exists at MongoDB).
 * * internal: the property exists only at MongoDB (but not exposed at GraphQL).
 */
export type PropScope = 'external' | 'internal'

/**
 * Options for defining a relation.
 */
export interface Relation {
  /**
   * The reference type for the relation.
   */
  refType: () => Type<any>
}

/**
 * Options for defining a one-to-many relation.
 */
export interface OneToMany extends Relation {
  /**
   * The foreign field for the relation.
   */
  foreignField: string
}

/**
 * Options for defining a many-to-one relation.
 */
export interface ManyToOne extends Relation {
  /**
   * The local field for the relation.
   */
  localField: string
}

/**
 * Options for defining a one-to-one relation.
 */
export interface OneToOne extends Relation {
  /**
   * The local field for the relation.
   */
  localField: string
}

/**
 * Options for the `DatoProp` decorator.
 */
export interface DatoPropOptions {
  /**
   * Indicates if the property is nullable.
   */
  nullable?: boolean
  /**
   * Indicates if the property is a primary key.
   */
  primaryKey?: boolean
  /**
   * Options for defining a one-to-many relation.
   */
  oneToMany?: OneToMany
  /**
   * Options for defining a many-to-one relation.
   */
  manyToOne?: ManyToOne
  /**
   * Options for defining a one-to-one relation.
   */
  oneToOne?: OneToOne
  /**
   * The scope of the property.
   */
  propScope?: PropScope
  /**
   * The type of the property.
   */
  type?: () => any
}

/**
 * Decorator that marks a property as:
 * 1) A MongoDB DAO (document) property.
 * 2) A GraphQL output DTO property.
 * @param {DatoPropOptions} options - The options for the decorator.
 * @returns {PropertyDecorator} - The decorator function.
 */
export function DatoProp (options: DatoPropOptions = {}): PropertyDecorator {
  return function (target: any, key: string) {
    const reflectedType: any | undefined = Reflect.getMetadata(
      'design:type',
      target,
      key
    )
    const isArray = reflectedType && reflectedType.name === 'Array'

    // Check for conflicting options
    if (
      (options.manyToOne !== undefined ||
        options.oneToOne !== undefined ||
        options.oneToMany !== undefined ||
        options.type !== undefined) &&
      options.primaryKey === true
    ) {
      throw new Error(
        `Option 'primaryKey' cannot be defined together with options 'manyToOne'/oneToOne'/'oneToMany'/'type', at '@DatoProp()' decorator, above property '${target.constructor.name}.${key}'`
      )
    }

    if (
      (options.manyToOne !== undefined || options.oneToOne !== undefined || options.oneToMany !== undefined) &&
      options.type !== undefined
    ) {
      throw new Error(
        `Option 'type' cannot be defined together with options 'manyToOne'/'oneToOne'/'oneToMany', at '@DatoProp()' decorator, above property '${target.constructor.name}.${key}'`
      )
    }

    if ([(options.oneToMany !== undefined), (options.manyToOne !== undefined), (options.oneToOne !== undefined)].filter(Boolean).length > 1) {
      throw new Error(
        `Options 'oneToMany'/'manyToOne'/'oneToOne' cannot be defined together, at '@DatoProp()' decorator, above property '${target.constructor.name}.${key}'`
      )
    }

    if (options.type !== undefined && options.primaryKey === true) {
      throw new Error(
        `Option 'primaryKey' cannot be defined together with option 'type', at '@DatoProp()' decorator, above property '${target.constructor.name}.${key}'`
      )
    }

    const typeFunc =
      options.manyToOne?.refType ?? options.oneToOne?.refType ?? options.oneToMany?.refType ?? options.type

    // Deal with MongoDB aspects of the property.
    if (
      options.primaryKey !== true &&
      (options.propScope === undefined || options.propScope === 'internal')
    ) {
      const typegooseOptions: TypegooseOptions = {
        required: options.nullable !== true
      }
      if (options.oneToMany !== undefined || options.manyToOne !== undefined || options.oneToOne !== undefined) {
        if (typeFunc === undefined) {
          throw new Error(
            `Option 'refType' is required, at '@DatoProp()' decorator, above property '${target.constructor.name}.${key}'`
          )
        }
        if (options.oneToMany !== undefined) {
          typegooseOptions.foreignField = options.oneToMany.foreignField
          typegooseOptions.localField = PRIMARY_KEYS_NAME
        } else if (options.manyToOne !== undefined || options.oneToOne !== undefined) {
          typegooseOptions.foreignField = PRIMARY_KEYS_NAME
          typegooseOptions.justOne = true
          typegooseOptions.localField = options.manyToOne?.localField ?? options.oneToOne?.localField
        }
        typegooseOptions.ref = typeFunc
        typegooseOptions.type = reflectedType ?? typeFunc
      } else if (isArray) {
        if (options.type === undefined) {
          throw new Error(
            `Option 'type' is required, at '@DatoProp()' decorator, above property '${target.constructor.name}.${key}'`
          )
        }
        typegooseOptions.type = options.type
      }
      if (!typegooseOptions.type && !reflectedType) {
        typegooseOptions.type = typeFunc
      }
      TypegooseProp(typegooseOptions)(target, key) // Apply the typegoose @Prop() decorator to the property.
    }

    // Deal with GraphQL aspects of the property.
    if (options.propScope === undefined || options.propScope === 'external') {
      const graphQlTypeFunc: ReturnTypeFunc =
        typeFunc !== undefined
          ? isArray
            ? () => [typeFunc()]
            : typeFunc
          : options.primaryKey === true
            ? () => PRIMARY_KEYS_TYPE
            : () => reflectedType

      if (options.primaryKey === true) {
        IDField(graphQlTypeFunc)(target, key) // Apply the query-graphql @IDField() decorator to the property.
      } else {
        if (options.nullable !== undefined || isArray) {
          Field(graphQlTypeFunc, { nullable: true })(target, key) // Apply the graphql @Field() decorator to the property.
        } else {
          FilterableField(graphQlTypeFunc)(target, key) // Apply the query-graphql @FilterableField() decorator to the property.
        }
        let relationType: RelationType | undefined
        if (options.oneToMany !== undefined) {
          relationType = 'oneToMany'
        } else if (options.manyToOne !== undefined) {
          relationType = 'manyToOne'
        } else if (options.oneToOne !== undefined) {
          relationType = 'oneToOne'
        }
        // Prepare property-related metadata, to be used later at defining of GraphQL relations (see
        // invocation of 'FilterableRelation()'/'FilterableOffsetConnection()' at our @Dato() decorator).
        if (relationType) {
          if (!Reflect.hasMetadata('relationsMetadata', target.constructor)) {
            Reflect.defineMetadata('relationsMetadata', [], target.constructor)
          }
          // * The 'type()' method will be passed to 'FilterableRelation()'/'FilterableOffsetConnection()' methods at our @Dato() decorator.
          // * We wrap the access to method 'typeFunc()' with another method '(): any => {}' to postpone resolving of the
          //   type to a later time, while the type is actually consumed.
          // * Without this wrapping - 'typeFunc()' may return 'undefined', due to dependency issues.
          const type = (): any => {
            if (!typeFunc) {
              throw new Error('Type func not defined')
            }
            const type = typeFunc()
            if (!type) {
              throw new Error('Type not defined')
            }
            return type
          }
          const relationsMetadata = Reflect.getMetadata('relationsMetadata', target.constructor) as RelationMetadata[]
          relationsMetadata.push({
            type,
            propName: key,
            relationType,
            nullableOneToOneRelation: (options.oneToOne !== undefined) && options.nullable
          })
        }
      }
    }
  }
}
