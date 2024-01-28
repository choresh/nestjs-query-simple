import { InputType } from '@nestjs/graphql'

export type DtoType = 'input' | 'update'

/**
 * Decorator that marks a class as a GraphQL input/update DTO type.
 * @param {string} name - The dto name, as exposed by GraphQL ('Input' or 'Update' suffix will be added automaticly, according the 'type' parameter).
 * @returns {ClassDecorator} - The decorator function.
 */
export function Dto (name: string, type: DtoType): ClassDecorator {
  let suffix: string
  switch (type) {
    case 'input':
      suffix = 'Input'
      break
    case 'update':
      suffix = 'Update'
      break
    default:
      throw new Error('Invalid dto type')
  }

  return (target: any) => {
    InputType(name + suffix)(target) // Apply the @InputType() decorator to the class.
  }
}
