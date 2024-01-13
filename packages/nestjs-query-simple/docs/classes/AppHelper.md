[nestjs-query-simple](../README.md) / [Exports](../modules.md) / AppHelper

# Class: AppHelper

Helper class for configuring the TypegooseModule with a logger.

## Table of contents

### Constructors

- [constructor](AppHelper.md#constructor)

### Methods

- [forRoot](AppHelper.md#forroot)
- [forRootAsync](AppHelper.md#forrootasync)

## Constructors

### constructor

• **new AppHelper**(): [`AppHelper`](AppHelper.md)

#### Returns

[`AppHelper`](AppHelper.md)

## Methods

### forRoot

▸ **forRoot**(`uri`, `logger?`): `DynamicModule`

Creates a TypegooseModule forRoot with a specified URI and logger.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uri` | `string` | The MongoDB connection URI. |
| `logger?` | [`Logger`](../interfaces/Logger.md) | The logger object to use for logging. |

#### Returns

`DynamicModule`

A DynamicModule representing the configured TypegooseModule.

#### Defined in

[src/helpers/appHelper.ts:50](https://github.com/choresh/nestjs-query-simple/blob/d4bd01f/packages/nestjs-query-simple/src/helpers/appHelper.ts#L50)

___

### forRootAsync

▸ **forRootAsync**(`options`): `DynamicModule`

Creates a TypegooseModule forRootAsync with specified options and logger.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`Options`](../interfaces/Options.md) | Options for configuring the TypegooseModule. |

#### Returns

`DynamicModule`

A DynamicModule representing the configured TypegooseModule.

#### Defined in

[src/helpers/appHelper.ts:62](https://github.com/choresh/nestjs-query-simple/blob/d4bd01f/packages/nestjs-query-simple/src/helpers/appHelper.ts#L62)
