/**
 * Possible types of relations between entities.
 * @typedef {'oneToMany' | 'manyToOne' | 'manyToOne'} RelationType
 */
export type RelationType = 'oneToMany' | 'manyToOne' | 'oneToOne'

/**
 * Metadata for a single relation between entities.
 * @interface RelationMetadata
 */
export interface RelationMetadata {
  /**
   * Returns the type of the related dato.
   * @type {() => any}
   */
  type: () => any

  /**
   * The property name of the relation.
   * @type {string}
   */
  propName: string

  /**
   * The type of relation.
   * @type {RelationType}
   */
  relationType: RelationType

  /**
   * Specifies if 'one-to-one' relation property can be nullable in the GraphQL schema.
   */
  nullableOneToOneRelation?: boolean
}

/**
 * Metadata for multiple relations between entities.
 * @typedef {RelationMetadata[]} RelationsMetadata
 */
export type RelationsMetadata = [RelationMetadata]
