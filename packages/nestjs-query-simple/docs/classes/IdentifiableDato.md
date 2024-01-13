[nestjs-query-simple](../README.md) / [Exports](../modules.md) / IdentifiableDato

# Class: IdentifiableDato

Base class for identifiable entities.

## Implements

- `Base`

## Table of contents

### Constructors

- [constructor](IdentifiableDato.md#constructor)

### Properties

- [\_id](IdentifiableDato.md#_id)
- [id](IdentifiableDato.md#id)

## Constructors

### constructor

• **new IdentifiableDato**(): [`IdentifiableDato`](IdentifiableDato.md)

#### Returns

[`IdentifiableDato`](IdentifiableDato.md)

## Properties

### \_id

• **\_id**: `ObjectId`

Primary key of the dato (in MongoDb).

#### Implementation of

Base.\_id

#### Defined in

[src/bases/identifiableDato.ts:27](https://github.com/choresh/nestjs-query-simple/blob/4cd7de2/packages/nestjs-query-simple/src/bases/identifiableDato.ts#L27)

___

### id

• **id**: `string`

Primary key of the dato (in GraphQL).

#### Implementation of

Base.id

#### Defined in

[src/bases/identifiableDato.ts:33](https://github.com/choresh/nestjs-query-simple/blob/4cd7de2/packages/nestjs-query-simple/src/bases/identifiableDato.ts#L33)
