/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { ModelOptions } from '@typegoose/typegoose'
import {
  FilterableOffsetConnection,
  FilterableRelation,
  KeySet,
  PagingStrategies,
  QueryOptions
} from '@ptc-org/nestjs-query-graphql'
import { InputType, ObjectType } from '@nestjs/graphql'
import { type RelationMetadata } from '.'

/**
 * Options for the `Dato` decorator.
 */
export interface DatoOptions {
  /**
   * The name of the dato.
   */
  name: string
  /**
   * The collection name for MongoDB.
   */
  collection?: string
  /**
   * Indicates if this dato is for 'output only', meaning of 'output only':
   * * The data is calculated (not simple reflection of MongoDB data).
   * * The data exposed as GraphQL response (not appear in GraphQL request).
   */
  outputOnly?: boolean
}

/**
 * Decorator that marks a class as:
 * 1) A MongoDB DAO (document).
 * 2) A GraphQL output DTO.
 * @param {DatoOptions} options - The options for the decorator.
 * @returns {ClassDecorator} - The decorator function.
 */
export function Dato (options: DatoOptions): ClassDecorator {
  return (target: any) => {
    if (options.outputOnly === true && options.collection !== undefined) {
      throw new Error(
        `Option 'outputOnly' cannot be defined together with option 'collection', at '@Dato()' decorator, above class '${target.constructor.name as string}'`
      )
    }

    // Handle MongoDB aspects.
    if (options.outputOnly !== true) {
      if (options.collection !== undefined) {
        ModelOptions({
          schemaOptions: { timestamps: true, collection: options.collection }
        })(target) // Apply the typegoose @ModelOptions() decorator to the class.
      }
    }

    // Handle GraphQL optional aspects.
    if (options.outputOnly !== true) {
      QueryOptions({ pagingStrategy: PagingStrategies.OFFSET })(target) // Apply the @QueryOptions() decorator to the class.
      if (options.collection !== undefined) {
        KeySet(['id'])(target) // Apply the @KeySet() decorator to the class.
        InputType(options.name + 'NonEmbeddedInput')(target) // Apply the @InputType() decorator to the class.
      } else {
        InputType(options.name + 'EmbeddedInput')(target) // Apply the @InputType() decorator to the class.
      }
      // Handle GraphQL relations aspects (based on properties-related metadata, that was prepared in our @DatoProp() decorator).
      const relationsMetadata = Reflect.getMetadata('relationsMetadata', target) as RelationMetadata[] | undefined
      relationsMetadata?.forEach(currRelationsMetadata => {
        switch (currRelationsMetadata.relationType) {
          case 'manyToOne':
            FilterableRelation(currRelationsMetadata.propName, currRelationsMetadata.type)(target) // Apply a query-graphql @FilterableRelation() decorator to the class.
            break
          case 'oneToOne':
            FilterableRelation(currRelationsMetadata.propName, currRelationsMetadata.type, { nullable: currRelationsMetadata.nullableOneToOneRelation })(target) // Apply a query-graphql @FilterableRelation() decorator to the class.
            break
          case 'oneToMany':
            FilterableOffsetConnection(currRelationsMetadata.propName, currRelationsMetadata.type)(target) // Apply a query-graphql @FilterableOffsetConnection() decorator to the class.
            break
          default:
            throw new Error('Invalid relation type')
        }
      })
    }

    // Handle GraphQL mandatory aspects.
    ObjectType(options.name)(target) // Apply the @ObjectType() decorator to the class
  }
}
