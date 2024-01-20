import { InputType } from '@nestjs/graphql'

/**
 * Decorator that marks a class as a GraphQL input DTO type.
 * @param {string} name - The dto name suffix, as exposed by GraphQL (will be preceded by 'Input' prefix).
 * @returns {ClassDecorator} - The decorator function.
 */
export function InputDto (name: string): ClassDecorator {
  return (target: any) => {
    InputType(name + 'Input')(target) // Apply the @InputType() decorator to the class.
  }
}

/**
 * Decorator that marks a class as a GraphQL update DTO type.
 * @param {string} name - The dto name suffix, as exposed by GraphQL (will be preceded by 'Update' prefix).
 * @returns {ClassDecorator} - The decorator function.
 */
export function UpdateDto (name: string): ClassDecorator {
  return (target: any) => {
    InputType(name + 'Update')(target) // Apply the @InputType() decorator to the class.
  }
}
