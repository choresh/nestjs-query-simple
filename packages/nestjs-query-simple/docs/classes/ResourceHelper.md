[nestjs-query-simple](../README.md) / [Exports](../modules.md) / ResourceHelper

# Class: ResourceHelper

Utility class for configuring a resource module.

## Table of contents

### Constructors

- [constructor](ResourceHelper.md#constructor)

### Methods

- [forFeature](ResourceHelper.md#forfeature)

## Constructors

### constructor

• **new ResourceHelper**(): [`ResourceHelper`](ResourceHelper.md)

#### Returns

[`ResourceHelper`](ResourceHelper.md)

## Methods

### forFeature

▸ **forFeature**(`opts`): `DynamicModule`

Creates a DynamicModule for the resource with the provided options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | [`ModuleOpts`](../interfaces/ModuleOpts.md) | The configuration options. |

#### Returns

`DynamicModule`

The configured DynamicModule.

**`Static`**

#### Defined in

[src/helpers/resourceHelper.ts:49](https://github.com/choresh/nestjs-query-simple/blob/5137169/packages/nestjs-query-simple/src/helpers/resourceHelper.ts#L49)
