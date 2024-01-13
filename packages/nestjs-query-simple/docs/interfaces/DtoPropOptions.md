[nestjs-query-simple](../README.md) / [Exports](../modules.md) / DtoPropOptions

# Interface: DtoPropOptions

Options for the `DtoProp` decorator.

## Table of contents

### Properties

- [nullable](DtoPropOptions.md#nullable)
- [type](DtoPropOptions.md#type)

## Properties

### nullable

• `Optional` **nullable**: `boolean`

Specifies if the property can be nullable in the GraphQL schema.

#### Defined in

[src/decorators/dtoProp.ts:13](https://github.com/choresh/nestjs-query-simple/blob/4cd7de2/packages/nestjs-query-simple/src/decorators/dtoProp.ts#L13)

___

### type

• `Optional` **type**: () => `any`

Specifies a custom type function for the property.

#### Type declaration

▸ (): `any`

Specifies a custom type function for the property.

##### Returns

`any`

#### Defined in

[src/decorators/dtoProp.ts:17](https://github.com/choresh/nestjs-query-simple/blob/4cd7de2/packages/nestjs-query-simple/src/decorators/dtoProp.ts#L17)
