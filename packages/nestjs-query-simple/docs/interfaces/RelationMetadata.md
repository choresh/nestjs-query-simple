[nestjs-query-simple](../README.md) / [Exports](../modules.md) / RelationMetadata

# Interface: RelationMetadata

Metadata for a single relation between DATOs.
 RelationMetadata

## Table of contents

### Properties

- [nullableOneToOneRelation](RelationMetadata.md#nullableonetoonerelation)
- [propName](RelationMetadata.md#propname)
- [relationType](RelationMetadata.md#relationtype)
- [type](RelationMetadata.md#type)

## Properties

### nullableOneToOneRelation

• `Optional` **nullableOneToOneRelation**: `boolean`

Specifies if 'one-to-one' relation property can be nullable in the GraphQL schema.

#### Defined in

[src/decorators/infra/relationsMetadata.ts:33](https://github.com/choresh/nestjs-query-simple/blob/e803793/packages/nestjs-query-simple/src/decorators/infra/relationsMetadata.ts#L33)

___

### propName

• **propName**: `string`

The property name of the relation.

#### Defined in

[src/decorators/infra/relationsMetadata.ts:22](https://github.com/choresh/nestjs-query-simple/blob/e803793/packages/nestjs-query-simple/src/decorators/infra/relationsMetadata.ts#L22)

___

### relationType

• **relationType**: [`RelationType`](../modules.md#relationtype)

The type of relation.

#### Defined in

[src/decorators/infra/relationsMetadata.ts:28](https://github.com/choresh/nestjs-query-simple/blob/e803793/packages/nestjs-query-simple/src/decorators/infra/relationsMetadata.ts#L28)

___

### type

• **type**: () => `any`

Returns the type of the related dato.

#### Type declaration

▸ (): `any`

Returns the type of the related dato.

##### Returns

`any`

#### Defined in

[src/decorators/infra/relationsMetadata.ts:16](https://github.com/choresh/nestjs-query-simple/blob/e803793/packages/nestjs-query-simple/src/decorators/infra/relationsMetadata.ts#L16)
