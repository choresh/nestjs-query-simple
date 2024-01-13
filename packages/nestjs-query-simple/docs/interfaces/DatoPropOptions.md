[nestjs-query-simple](../README.md) / [Exports](../modules.md) / DatoPropOptions

# Interface: DatoPropOptions

Options for the `DatoProp` decorator.

## Table of contents

### Properties

- [manyToOne](DatoPropOptions.md#manytoone)
- [nullable](DatoPropOptions.md#nullable)
- [oneToMany](DatoPropOptions.md#onetomany)
- [oneToOne](DatoPropOptions.md#onetoone)
- [primaryKey](DatoPropOptions.md#primarykey)
- [propScope](DatoPropOptions.md#propscope)
- [type](DatoPropOptions.md#type)

## Properties

### manyToOne

• `Optional` **manyToOne**: [`ManyToOne`](ManyToOne.md)

Options for defining a many-to-one relation.

#### Defined in

[src/decorators/datoProp.ts:93](https://github.com/choresh/nestjs-query-simple/blob/e803793/packages/nestjs-query-simple/src/decorators/datoProp.ts#L93)

___

### nullable

• `Optional` **nullable**: `boolean`

Indicates if the property is nullable.

#### Defined in

[src/decorators/datoProp.ts:81](https://github.com/choresh/nestjs-query-simple/blob/e803793/packages/nestjs-query-simple/src/decorators/datoProp.ts#L81)

___

### oneToMany

• `Optional` **oneToMany**: [`OneToMany`](OneToMany.md)

Options for defining a one-to-many relation.

#### Defined in

[src/decorators/datoProp.ts:89](https://github.com/choresh/nestjs-query-simple/blob/e803793/packages/nestjs-query-simple/src/decorators/datoProp.ts#L89)

___

### oneToOne

• `Optional` **oneToOne**: [`OneToOne`](OneToOne.md)

Options for defining a one-to-one relation.

#### Defined in

[src/decorators/datoProp.ts:97](https://github.com/choresh/nestjs-query-simple/blob/e803793/packages/nestjs-query-simple/src/decorators/datoProp.ts#L97)

___

### primaryKey

• `Optional` **primaryKey**: `boolean`

Indicates if the property is a primary key.

#### Defined in

[src/decorators/datoProp.ts:85](https://github.com/choresh/nestjs-query-simple/blob/e803793/packages/nestjs-query-simple/src/decorators/datoProp.ts#L85)

___

### propScope

• `Optional` **propScope**: [`PropScope`](../modules.md#propscope)

The scope of the property.

#### Defined in

[src/decorators/datoProp.ts:101](https://github.com/choresh/nestjs-query-simple/blob/e803793/packages/nestjs-query-simple/src/decorators/datoProp.ts#L101)

___

### type

• `Optional` **type**: () => `any`

The type of the property.

#### Type declaration

▸ (): `any`

The type of the property.

##### Returns

`any`

#### Defined in

[src/decorators/datoProp.ts:105](https://github.com/choresh/nestjs-query-simple/blob/e803793/packages/nestjs-query-simple/src/decorators/datoProp.ts#L105)
