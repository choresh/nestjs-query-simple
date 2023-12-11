/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { Field, type ReturnTypeFunc } from '@nestjs/graphql'

/**
 * Options for the `DtoProp` decorator.
 */
export interface DtoPropOptions {
  /**
   * Specifies if the property can be nullable in the GraphQL schema.
   */
  nullable?: boolean
  /**
   * Specifies a custom type function for the property.
   */
  type?: () => any
}

/**
 * Decorator that marks a property as a GraphQL input DTO property.
 * @param {DtoPropOptions} options - The options for the decorator.
 * @returns {PropertyDecorator} - The decorator function.
 */
export function DtoProp (options: DtoPropOptions = {}) {
  return function (target: any, key: string) {
    const reflectedType = Reflect.getMetadata('design:type', target, key)
    if (!reflectedType) {
      throw new Error(
        `Failed to get property metadata, at '@DtoProp()' decorator, class name: '${target.constructor.name}', property name: '${key}'`
      )
    }
    const typeFunc = options.type
    const graphQlTypeFunc: ReturnTypeFunc =
      typeFunc !== undefined
        ? reflectedType.name === 'Array'
          ? () => [typeFunc()]
          : typeFunc
        : () => reflectedType
    Field(graphQlTypeFunc, { nullable: options.nullable })(target, key) // Apply the graphql @Field() decorator to the property.
  }
}
