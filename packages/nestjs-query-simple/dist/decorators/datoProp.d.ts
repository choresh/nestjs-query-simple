import { type Type } from '@nestjs/common';
export type PropScope = 'external' | 'internal';
export interface Relation {
    refType: () => Type<any>;
}
export interface OneToMany extends Relation {
    foreignField: string;
}
export interface ManyToOne extends Relation {
    localField: string;
}
export interface OneToOne extends Relation {
    localField: string;
}
export interface DatoPropOptions {
    nullable?: boolean;
    primaryKey?: boolean;
    oneToMany?: OneToMany;
    manyToOne?: ManyToOne;
    oneToOne?: OneToOne;
    propScope?: PropScope;
    type?: () => any;
}
export declare function DatoProp(options?: DatoPropOptions): PropertyDecorator;
