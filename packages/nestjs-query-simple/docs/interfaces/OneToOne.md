[nestjs-query-simple](../README.md) / [Exports](../modules.md) / OneToOne

# Interface: OneToOne

Options for defining a one-to-one relation.

## Hierarchy

- [`Relation`](Relation.md)

  ↳ **`OneToOne`**

## Table of contents

### Properties

- [localField](OneToOne.md#localfield)
- [refType](OneToOne.md#reftype)

## Properties

### localField

• **localField**: `string`

The local field for the relation.

#### Defined in

[src/decorators/datoProp.ts:71](https://github.com/choresh/nestjs-query-simple/blob/4cd7de2/packages/nestjs-query-simple/src/decorators/datoProp.ts#L71)

___

### refType

• **refType**: () => `Type`\<`any`\>

The reference type for the relation.

#### Type declaration

▸ (): `Type`\<`any`\>

The reference type for the relation.

##### Returns

`Type`\<`any`\>

#### Inherited from

[Relation](Relation.md).[refType](Relation.md#reftype)

#### Defined in

[src/decorators/datoProp.ts:41](https://github.com/choresh/nestjs-query-simple/blob/4cd7de2/packages/nestjs-query-simple/src/decorators/datoProp.ts#L41)
