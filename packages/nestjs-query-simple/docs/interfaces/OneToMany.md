[nestjs-query-simple](../README.md) / [Exports](../modules.md) / OneToMany

# Interface: OneToMany

Options for defining a one-to-many relation.

## Hierarchy

- [`Relation`](Relation.md)

  ↳ **`OneToMany`**

## Table of contents

### Properties

- [foreignField](OneToMany.md#foreignfield)
- [refType](OneToMany.md#reftype)

## Properties

### foreignField

• **foreignField**: `string`

The foreign field for the relation.

#### Defined in

[src/decorators/datoProp.ts:51](https://github.com/choresh/nestjs-query-simple/blob/e803793/packages/nestjs-query-simple/src/decorators/datoProp.ts#L51)

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

[src/decorators/datoProp.ts:41](https://github.com/choresh/nestjs-query-simple/blob/e803793/packages/nestjs-query-simple/src/decorators/datoProp.ts#L41)
