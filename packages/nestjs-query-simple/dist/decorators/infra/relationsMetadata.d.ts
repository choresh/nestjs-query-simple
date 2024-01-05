export type RelationType = 'oneToMany' | 'manyToOne' | 'oneToOne';
export interface RelationMetadata {
    type: () => any;
    propName: string;
    relationType: RelationType;
    nullableOneToOneRelation?: boolean;
}
export type RelationsMetadata = [RelationMetadata];
