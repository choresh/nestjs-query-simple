[nestjs-query-simple](../README.md) / [Exports](../modules.md) / ManyToOne

# Interface: ManyToOne

Options for defining a many-to-one relation.

## Hierarchy

- [`Relation`](Relation.md)

  ↳ **`ManyToOne`**

## Table of contents

### Properties

- [localField](ManyToOne.md#localfield)
- [refType](ManyToOne.md#reftype)

## Properties

### localField

• **localField**: `string`

The local field for the relation.

#### Defined in

[src/decorators/datoProp.ts:61](https://github.com/choresh/nestjs-query-simple/blob/d4bd01f/packages/nestjs-query-simple/src/decorators/datoProp.ts#L61)

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

[src/decorators/datoProp.ts:41](https://github.com/choresh/nestjs-query-simple/blob/d4bd01f/packages/nestjs-query-simple/src/decorators/datoProp.ts#L41)
