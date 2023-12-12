/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/types" />
import { type Base } from '@typegoose/typegoose/lib/defaultClasses';
import { Types, type Document } from 'mongoose';
export type DatoDoc<Dato> = Document<unknown, any, Dato> & Dato & Required<{
    _id: Types.ObjectId;
}>;
export declare class IdentifiableDato implements Base {
    _id: Types.ObjectId;
    id: string;
}
