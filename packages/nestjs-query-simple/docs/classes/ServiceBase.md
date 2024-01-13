[nestjs-query-simple](../README.md) / [Exports](../modules.md) / ServiceBase

# Class: ServiceBase\<Dato\>

Abstract base class for services that use TypegooseQueryService.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Dato` | extends `Base` | The Typegoose DAO (document) type. |

## Hierarchy

- `TypegooseQueryService`\<`Dato`\>

  ↳ **`ServiceBase`**

## Table of contents

### Constructors

- [constructor](ServiceBase.md#constructor)

### Properties

- [Model](ServiceBase.md#model)
- [filterQueryBuilder](ServiceBase.md#filterquerybuilder)
- [model](ServiceBase.md#model-1)

### Methods

- [addRelations](ServiceBase.md#addrelations)
- [aggregate](ServiceBase.md#aggregate)
- [aggregateRelations](ServiceBase.md#aggregaterelations)
- [count](ServiceBase.md#count)
- [countRelations](ServiceBase.md#countrelations)
- [createMany](ServiceBase.md#createmany)
- [createOne](ServiceBase.md#createone)
- [deleteMany](ServiceBase.md#deletemany)
- [deleteOne](ServiceBase.md#deleteone)
- [findById](ServiceBase.md#findbyid)
- [findRelation](ServiceBase.md#findrelation)
- [getById](ServiceBase.md#getbyid)
- [query](ServiceBase.md#query)
- [queryRelations](ServiceBase.md#queryrelations)
- [removeRelation](ServiceBase.md#removerelation)
- [removeRelations](ServiceBase.md#removerelations)
- [setRelation](ServiceBase.md#setrelation)
- [setRelations](ServiceBase.md#setrelations)
- [updateMany](ServiceBase.md#updatemany)
- [updateOne](ServiceBase.md#updateone)

## Constructors

### constructor

• **new ServiceBase**\<`Dato`\>(`model`): [`ServiceBase`](ServiceBase.md)\<`Dato`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Dato` | extends `Base`\<`ObjectId`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `ReturnModelType`\<() => `Dato`\> |

#### Returns

[`ServiceBase`](ServiceBase.md)\<`Dato`\>

#### Overrides

TypegooseQueryService\&lt;Dato\&gt;.constructor

#### Defined in

[src/bases/serviceBase.ts:10](https://github.com/choresh/nestjs-query-simple/blob/d4bd01f/packages/nestjs-query-simple/src/bases/serviceBase.ts#L10)

## Properties

### Model

• `Readonly` **Model**: `ReturnModelType`\<() => `Dato`\>

#### Inherited from

TypegooseQueryService.Model

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/typegoose-query-service.d.ts:11

___

### filterQueryBuilder

• `Readonly` **filterQueryBuilder**: `FilterQueryBuilder`\<`Dato`\>

#### Inherited from

TypegooseQueryService.filterQueryBuilder

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/typegoose-query-service.d.ts:12

___

### model

• `Protected` `Readonly` **model**: `ReturnModelType`\<() => `Dato`\>

#### Defined in

[src/bases/serviceBase.ts:10](https://github.com/choresh/nestjs-query-simple/blob/d4bd01f/packages/nestjs-query-simple/src/bases/serviceBase.ts#L10)

## Methods

### addRelations

▸ **addRelations**\<`Relation`\>(`relationName`, `id`, `relationIds`, `opts?`): `Promise`\<`DocumentType`\<`Dato`\>\>

#### Type parameters

| Name |
| :------ |
| `Relation` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `relationName` | `string` |
| `id` | `string` |
| `relationIds` | (`string` \| `number`)[] |
| `opts?` | `ModifyRelationOptions`\<`Dato`, `Relation`\> |

#### Returns

`Promise`\<`DocumentType`\<`Dato`\>\>

#### Inherited from

TypegooseQueryService.addRelations

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/reference-query.service.d.ts:19

___

### aggregate

▸ **aggregate**(`filter`, `aggregateQuery`): `Promise`\<`AggregateResponse`\<`Dato`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `Filter`\<`Dato`\> |
| `aggregateQuery` | `AggregateQuery`\<`Dato`\> |

#### Returns

`Promise`\<`AggregateResponse`\<`Dato`\>[]\>

#### Inherited from

TypegooseQueryService.aggregate

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/typegoose-query-service.d.ts:28

___

### aggregateRelations

▸ **aggregateRelations**\<`Relation`\>(`RelationClass`, `relationName`, `entities`, `filter`, `aggregate`): `Promise`\<`Map`\<`DocumentType`\<`Dato`\>, `AggregateResponse`\<`DocumentType`\<`Relation`\>\>[]\>\>

#### Type parameters

| Name |
| :------ |
| `Relation` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `RelationClass` | `Class`\<`Relation`\> |
| `relationName` | `string` |
| `entities` | `DocumentType`\<`Dato`\>[] |
| `filter` | `Filter`\<`Relation`\> |
| `aggregate` | `AggregateQuery`\<`Relation`\> |

#### Returns

`Promise`\<`Map`\<`DocumentType`\<`Dato`\>, `AggregateResponse`\<`DocumentType`\<`Relation`\>\>[]\>\>

#### Inherited from

TypegooseQueryService.aggregateRelations

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/reference-query.service.d.ts:11

▸ **aggregateRelations**\<`Relation`\>(`RelationClass`, `relationName`, `dto`, `filter`, `aggregate`): `Promise`\<`AggregateResponse`\<`DocumentType`\<`Relation`\>\>[]\>

#### Type parameters

| Name |
| :------ |
| `Relation` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `RelationClass` | `Class`\<`Relation`\> |
| `relationName` | `string` |
| `dto` | `DocumentType`\<`Dato`\> |
| `filter` | `Filter`\<`Relation`\> |
| `aggregate` | `AggregateQuery`\<`Relation`\> |

#### Returns

`Promise`\<`AggregateResponse`\<`DocumentType`\<`Relation`\>\>[]\>

#### Inherited from

TypegooseQueryService.aggregateRelations

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/reference-query.service.d.ts:12

___

### count

▸ **count**(`filter`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `Filter`\<`Dato`\> |

#### Returns

`Promise`\<`number`\>

#### Inherited from

TypegooseQueryService.count

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/typegoose-query-service.d.ts:29

___

### countRelations

▸ **countRelations**\<`Relation`\>(`RelationClass`, `relationName`, `entities`, `filter`): `Promise`\<`Map`\<`DocumentType`\<`Dato`\>, `number`\>\>

#### Type parameters

| Name |
| :------ |
| `Relation` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `RelationClass` | `Class`\<`Relation`\> |
| `relationName` | `string` |
| `entities` | `DocumentType`\<`Dato`\>[] |
| `filter` | `Filter`\<`Relation`\> |

#### Returns

`Promise`\<`Map`\<`DocumentType`\<`Dato`\>, `number`\>\>

#### Inherited from

TypegooseQueryService.countRelations

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/reference-query.service.d.ts:13

▸ **countRelations**\<`Relation`\>(`RelationClass`, `relationName`, `dto`, `filter`): `Promise`\<`number`\>

#### Type parameters

| Name |
| :------ |
| `Relation` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `RelationClass` | `Class`\<`Relation`\> |
| `relationName` | `string` |
| `dto` | `DocumentType`\<`Dato`\> |
| `filter` | `Filter`\<`Relation`\> |

#### Returns

`Promise`\<`number`\>

#### Inherited from

TypegooseQueryService.countRelations

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/reference-query.service.d.ts:14

___

### createMany

▸ **createMany**(`records`): `Promise`\<`DocumentType`\<`Dato`\>[]\>

Create multiple entities.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `records` | `DeepPartial`\<`Dato`\>[] | The entities to create. |

#### Returns

`Promise`\<`DocumentType`\<`Dato`\>[]\>

**`Example`**

```ts
const todoItem = await this.service.createMany([
  {title: 'Todo Item 1', completed: false },
  {title: 'Todo Item 2', completed: true },
]);
```

#### Inherited from

TypegooseQueryService.createMany

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/typegoose-query-service.d.ts:78

___

### createOne

▸ **createOne**(`record`): `Promise`\<`DocumentType`\<`Dato`\>\>

Creates a single entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `record` | `DeepPartial`\<`Dato`\> | The entity to create. |

#### Returns

`Promise`\<`DocumentType`\<`Dato`\>\>

**`Example`**

```ts
const todoItem = await this.service.createOne({title: 'Todo Item', completed: false });
```

#### Inherited from

TypegooseQueryService.createOne

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/typegoose-query-service.d.ts:65

___

### deleteMany

▸ **deleteMany**(`filter`): `Promise`\<`DeleteManyResponse`\>

Delete multiple records with a `@ptc-org/nestjs-query-core` `Filter`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter` | `Filter`\<`Dato`\> | A `Filter` to find records to delete. |

#### Returns

`Promise`\<`DeleteManyResponse`\>

**`Example`**

```ts
const { deletedCount } = this.service.deleteMany({
  created: { lte: new Date('2020-1-1') }
});
```

#### Inherited from

TypegooseQueryService.deleteMany

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/typegoose-query-service.d.ts:131

___

### deleteOne

▸ **deleteOne**(`id`, `opts?`): `Promise`\<`DocumentType`\<`Dato`\>\>

Delete an entity by `id`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The `id` of the entity to delete. |
| `opts?` | `DeleteOneOptions`\<`Dato`\> | Additional filter to use when finding the entity to delete. |

#### Returns

`Promise`\<`DocumentType`\<`Dato`\>\>

**`Example`**

```ts
const deletedTodo = await this.service.deleteOne(1);
```

#### Inherited from

TypegooseQueryService.deleteOne

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/typegoose-query-service.d.ts:117

___

### findById

▸ **findById**(`id`, `opts?`): `Promise`\<`undefined` \| `DocumentType`\<`Dato`\>\>

Find an entity by it's `id`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` \| `number` | The id of the record to find. |
| `opts?` | `FindByIdOptions`\<`Dato`\> | Additional options |

#### Returns

`Promise`\<`undefined` \| `DocumentType`\<`Dato`\>\>

**`Example`**

```ts
const todoItem = await this.service.findById(1);
```

#### Inherited from

TypegooseQueryService.findById

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/typegoose-query-service.d.ts:40

___

### findRelation

▸ **findRelation**\<`Relation`\>(`RelationClass`, `relationName`, `dtos`, `opts?`): `Promise`\<`Map`\<`Dato`, `undefined` \| `Relation`\>\>

#### Type parameters

| Name |
| :------ |
| `Relation` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `RelationClass` | `Class`\<`Relation`\> |
| `relationName` | `string` |
| `dtos` | `DocumentType`\<`Dato`\>[] |
| `opts?` | `FindRelationOptions`\<`Relation`\> |

#### Returns

`Promise`\<`Map`\<`Dato`, `undefined` \| `Relation`\>\>

#### Inherited from

TypegooseQueryService.findRelation

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/reference-query.service.d.ts:15

▸ **findRelation**\<`Relation`\>(`RelationClass`, `relationName`, `dto`, `opts?`): `Promise`\<`undefined` \| `DocumentType`\<`Relation`\>\>

#### Type parameters

| Name |
| :------ |
| `Relation` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `RelationClass` | `Class`\<`Relation`\> |
| `relationName` | `string` |
| `dto` | `DocumentType`\<`Dato`\> |
| `opts?` | `FindRelationOptions`\<`Relation`\> |

#### Returns

`Promise`\<`undefined` \| `DocumentType`\<`Relation`\>\>

#### Inherited from

TypegooseQueryService.findRelation

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/reference-query.service.d.ts:16

___

### getById

▸ **getById**(`id`, `opts?`): `Promise`\<`DocumentType`\<`Dato`\>\>

Gets an entity by it's `id`. If the entity is not found a rejected promise is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the record to find. |
| `opts?` | `GetByIdOptions`\<`Dato`\> | Additional options |

#### Returns

`Promise`\<`DocumentType`\<`Dato`\>\>

**`Example`**

```ts
try {
  const todoItem = await this.service.getById(1);
} catch(e) {
  console.error('Unable to find entity with id = 1');
}
```

#### Inherited from

TypegooseQueryService.getById

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/typegoose-query-service.d.ts:55

___

### query

▸ **query**(`query`): `Promise`\<`DocumentType`\<`Dato`\>[]\>

Query for multiple entities, using a Query from `@ptc-org/nestjs-query-core`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `Query`\<`Dato`\> | The Query used to filter, page, and sort rows. |

#### Returns

`Promise`\<`DocumentType`\<`Dato`\>[]\>

**`Example`**

```ts
const todoItems = await this.service.query({
  filter: { title: { eq: 'Foo' } },
  paging: { limit: 10 },
  sorting: [{ field: "create", direction: SortDirection.DESC }],
});
```

#### Inherited from

TypegooseQueryService.query

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/typegoose-query-service.d.ts:27

___

### queryRelations

▸ **queryRelations**\<`Relation`\>(`RelationClass`, `relationName`, `entities`, `query`): `Promise`\<`Map`\<`DocumentType`\<`Dato`\>, `DocumentType`\<`Relation`\>[]\>\>

#### Type parameters

| Name |
| :------ |
| `Relation` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `RelationClass` | `Class`\<`Relation`\> |
| `relationName` | `string` |
| `entities` | `DocumentType`\<`Dato`\>[] |
| `query` | `Query`\<`Relation`\> |

#### Returns

`Promise`\<`Map`\<`DocumentType`\<`Dato`\>, `DocumentType`\<`Relation`\>[]\>\>

#### Inherited from

TypegooseQueryService.queryRelations

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/reference-query.service.d.ts:17

▸ **queryRelations**\<`Relation`\>(`RelationClass`, `relationName`, `dto`, `query`): `Promise`\<`DocumentType`\<`Relation`\>[]\>

#### Type parameters

| Name |
| :------ |
| `Relation` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `RelationClass` | `Class`\<`Relation`\> |
| `relationName` | `string` |
| `dto` | `DocumentType`\<`Dato`\> |
| `query` | `Query`\<`Relation`\> |

#### Returns

`Promise`\<`DocumentType`\<`Relation`\>[]\>

#### Inherited from

TypegooseQueryService.queryRelations

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/reference-query.service.d.ts:18

___

### removeRelation

▸ **removeRelation**\<`Relation`\>(`relationName`, `id`, `relationId`, `opts?`): `Promise`\<`DocumentType`\<`Dato`\>\>

#### Type parameters

| Name |
| :------ |
| `Relation` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `relationName` | `string` |
| `id` | `string` \| `number` |
| `relationId` | `string` \| `number` |
| `opts?` | `ModifyRelationOptions`\<`Dato`, `Relation`\> |

#### Returns

`Promise`\<`DocumentType`\<`Dato`\>\>

#### Inherited from

TypegooseQueryService.removeRelation

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/reference-query.service.d.ts:22

___

### removeRelations

▸ **removeRelations**\<`Relation`\>(`relationName`, `id`, `relationIds`, `opts?`): `Promise`\<`DocumentType`\<`Dato`\>\>

#### Type parameters

| Name |
| :------ |
| `Relation` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `relationName` | `string` |
| `id` | `string` \| `number` |
| `relationIds` | `number`[] \| `string`[] |
| `opts?` | `ModifyRelationOptions`\<`Dato`, `Relation`\> |

#### Returns

`Promise`\<`DocumentType`\<`Dato`\>\>

#### Inherited from

TypegooseQueryService.removeRelations

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/reference-query.service.d.ts:23

___

### setRelation

▸ **setRelation**\<`Relation`\>(`relationName`, `id`, `relationId`, `opts?`): `Promise`\<`DocumentType`\<`Dato`\>\>

#### Type parameters

| Name |
| :------ |
| `Relation` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `relationName` | `string` |
| `id` | `string` \| `number` |
| `relationId` | `string` \| `number` |
| `opts?` | `ModifyRelationOptions`\<`Dato`, `Relation`\> |

#### Returns

`Promise`\<`DocumentType`\<`Dato`\>\>

#### Inherited from

TypegooseQueryService.setRelation

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/reference-query.service.d.ts:21

___

### setRelations

▸ **setRelations**\<`Relation`\>(`relationName`, `id`, `relationIds`, `opts?`): `Promise`\<`DocumentType`\<`Dato`\>\>

#### Type parameters

| Name |
| :------ |
| `Relation` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `relationName` | `string` |
| `id` | `string` |
| `relationIds` | (`string` \| `number`)[] |
| `opts?` | `ModifyRelationOptions`\<`Dato`, `Relation`\> |

#### Returns

`Promise`\<`DocumentType`\<`Dato`\>\>

#### Inherited from

TypegooseQueryService.setRelations

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/reference-query.service.d.ts:20

___

### updateMany

▸ **updateMany**(`update`, `filter`): `Promise`\<`UpdateManyResponse`\>

Update multiple entities with a `@ptc-org/nestjs-query-core` Filter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `update` | `DeepPartial`\<`Dato`\> | A `Partial` of entity with the fields to update |
| `filter` | `Filter`\<`Dato`\> | A Filter used to find the records to update |

#### Returns

`Promise`\<`UpdateManyResponse`\>

**`Example`**

```ts
const { updatedCount } = await this.service.updateMany(
  { completed: true }, // the update to apply
  { title: { eq: 'Foo Title' } } // Filter to find records to update
);
```

#### Inherited from

TypegooseQueryService.updateMany

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/typegoose-query-service.d.ts:104

___

### updateOne

▸ **updateOne**(`id`, `update`, `opts?`): `Promise`\<`DocumentType`\<`Dato`\>\>

Update an entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The `id` of the record. |
| `update` | `DeepPartial`\<`Dato`\> | A `Partial` of the entity with fields to update. |
| `opts?` | `UpdateOneOptions`\<`Dato`\> | Additional options |

#### Returns

`Promise`\<`DocumentType`\<`Dato`\>\>

**`Example`**

```ts
const updatedEntity = await this.service.updateOne(1, { completed: true });
```

#### Inherited from

TypegooseQueryService.updateOne

#### Defined in

node_modules/@ptc-org/nestjs-query-typegoose/src/services/typegoose-query-service.d.ts:90
