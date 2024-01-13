[nestjs-query-simple](README.md) / Exports

# nestjs-query-simple

## Table of contents

### Classes

- [AppHelper](classes/AppHelper.md)
- [IdentifiableDato](classes/IdentifiableDato.md)
- [ResourceHelper](classes/ResourceHelper.md)
- [ServiceBase](classes/ServiceBase.md)

### Interfaces

- [DatoOptions](interfaces/DatoOptions.md)
- [DatoPropOptions](interfaces/DatoPropOptions.md)
- [DtoModuleOpts](interfaces/DtoModuleOpts.md)
- [DtoPropOptions](interfaces/DtoPropOptions.md)
- [Logger](interfaces/Logger.md)
- [ManyToOne](interfaces/ManyToOne.md)
- [ModuleOpts](interfaces/ModuleOpts.md)
- [OneToMany](interfaces/OneToMany.md)
- [OneToOne](interfaces/OneToOne.md)
- [Options](interfaces/Options.md)
- [Relation](interfaces/Relation.md)
- [RelationMetadata](interfaces/RelationMetadata.md)

### Type Aliases

- [DatoDoc](modules.md#datodoc)
- [LogFunction](modules.md#logfunction)
- [PropScope](modules.md#propscope)
- [RelationType](modules.md#relationtype)
- [RelationsMetadata](modules.md#relationsmetadata)

### Functions

- [Dato](modules.md#dato)
- [DatoProp](modules.md#datoprop)
- [DtoProp](modules.md#dtoprop)
- [InputDto](modules.md#inputdto)
- [UpdateDto](modules.md#updatedto)

## Type Aliases

### DatoDoc

Ƭ **DatoDoc**\<`Dato`\>: `Document`\<`unknown`, `any`, `Dato`\> & `Dato` & `Required`\<\{ `_id`: `Types.ObjectId`  }\>

Represents a document returned from Typegoose fetch methods in services.
Contains fetched data along with Typegoose methods (e.g., 'save()').

#### Type parameters

| Name |
| :------ |
| `Dato` |

#### Defined in

[src/bases/identifiableDato.ts:11](https://github.com/choresh/nestjs-query-simple/blob/5137169/packages/nestjs-query-simple/src/bases/identifiableDato.ts#L11)

___

### LogFunction

Ƭ **LogFunction**: (`message`: `string`, ...`meta`: `any`[]) => `void`

Represents a function that logs messages.

#### Type declaration

▸ (`message`, `...meta`): `void`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The log message. |
| `...meta` | `any`[] | Additional metadata to include in the log. |

##### Returns

`void`

#### Defined in

[src/helpers/appHelper.ts:13](https://github.com/choresh/nestjs-query-simple/blob/5137169/packages/nestjs-query-simple/src/helpers/appHelper.ts#L13)

___

### PropScope

Ƭ **PropScope**: ``"external"`` \| ``"internal"``

Possible scopes for a property.

#### Defined in

[src/decorators/datoProp.ts:32](https://github.com/choresh/nestjs-query-simple/blob/5137169/packages/nestjs-query-simple/src/decorators/datoProp.ts#L32)

___

### RelationType

Ƭ **RelationType**: ``"oneToMany"`` \| ``"manyToOne"`` \| ``"oneToOne"``

Possible types of relations between DATOs.

#### Defined in

[src/decorators/infra/relationsMetadata.ts:5](https://github.com/choresh/nestjs-query-simple/blob/5137169/packages/nestjs-query-simple/src/decorators/infra/relationsMetadata.ts#L5)

___

### RelationsMetadata

Ƭ **RelationsMetadata**: [[`RelationMetadata`](interfaces/RelationMetadata.md)]

Metadata for multiple relations between DATOs.

#### Defined in

[src/decorators/infra/relationsMetadata.ts:40](https://github.com/choresh/nestjs-query-simple/blob/5137169/packages/nestjs-query-simple/src/decorators/infra/relationsMetadata.ts#L40)

## Functions

### Dato

▸ **Dato**(`options`): `ClassDecorator`

Decorator that marks a class as:
1) A MongoDB DAO (document).
2) A GraphQL output DTO.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`DatoOptions`](interfaces/DatoOptions.md) | The options for the decorator. |

#### Returns

`ClassDecorator`

- The decorator function.

#### Defined in

[src/decorators/dato.ts:39](https://github.com/choresh/nestjs-query-simple/blob/5137169/packages/nestjs-query-simple/src/decorators/dato.ts#L39)

___

### DatoProp

▸ **DatoProp**(`options?`): `PropertyDecorator`

Decorator that marks a property as:
1) A MongoDB DAO (document) property.
2) A GraphQL output DTO property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`DatoPropOptions`](interfaces/DatoPropOptions.md) | The options for the decorator. |

#### Returns

`PropertyDecorator`

- The decorator function.

#### Defined in

[src/decorators/datoProp.ts:115](https://github.com/choresh/nestjs-query-simple/blob/5137169/packages/nestjs-query-simple/src/decorators/datoProp.ts#L115)

___

### DtoProp

▸ **DtoProp**(`options?`): (`target`: `any`, `key`: `string`) => `void`

Decorator that marks a property as a GraphQL input DTO property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`DtoPropOptions`](interfaces/DtoPropOptions.md) | The options for the decorator. |

#### Returns

`fn`

- The decorator function.

▸ (`target`, `key`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `key` | `string` |

##### Returns

`void`

#### Defined in

[src/decorators/dtoProp.ts:25](https://github.com/choresh/nestjs-query-simple/blob/5137169/packages/nestjs-query-simple/src/decorators/dtoProp.ts#L25)

___

### InputDto

▸ **InputDto**(`name`): `ClassDecorator`

Decorator that marks a class as a GraphQL input DTO type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the DTO. |

#### Returns

`ClassDecorator`

- The decorator function.

#### Defined in

[src/decorators/dto.ts:8](https://github.com/choresh/nestjs-query-simple/blob/5137169/packages/nestjs-query-simple/src/decorators/dto.ts#L8)

___

### UpdateDto

▸ **UpdateDto**(`name`): `ClassDecorator`

Decorator that marks a class as a GraphQL update DTO type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the DTO. |

#### Returns

`ClassDecorator`

- The decorator function.

#### Defined in

[src/decorators/dto.ts:19](https://github.com/choresh/nestjs-query-simple/blob/5137169/packages/nestjs-query-simple/src/decorators/dto.ts#L19)
