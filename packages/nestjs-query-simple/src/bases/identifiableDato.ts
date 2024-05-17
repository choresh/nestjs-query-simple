/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatoProp } from '../decorators/datoProp'
import { type Base } from '@typegoose/typegoose/lib/defaultClasses'
import { Types, type Document } from 'mongoose'
import { KeySet } from '@ptc-org/nestjs-query-graphql'
import { ObjectType } from '@nestjs/graphql'

/**
 * Represents a document returned from Typegoose fetch methods in services.
 * Contains fetched data along with Typegoose methods (e.g. 'save()').
 */
export type DatoDoc<Dato> = Document<unknown, any, Dato> &
Dato &
Required<{ _id: Types.ObjectId }>

/**
 * Base class for identifiable DATO.
 */

@ObjectType()
@KeySet(['id'])
export class IdentifiableDato implements Base {
  /**
   * Primary key of the dato (in MongoDb).
   */
  @DatoProp({ primaryKey: true, propScope: 'internal' })
    _id!: Types.ObjectId

  /**
   * Primary key of the dato (in GraphQL).
   */
  @DatoProp({ primaryKey: true, propScope: 'external' })
    id!: string
}
