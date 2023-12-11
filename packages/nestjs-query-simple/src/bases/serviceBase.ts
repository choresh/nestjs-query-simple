import { TypegooseQueryService } from '@ptc-org/nestjs-query-typegoose'
import { type Base } from '@typegoose/typegoose/lib/defaultClasses'
import { type ReturnModelType } from '@ptc-org/nestjs-query-typegoose/src/typegoose-types.helper'

/**
 * Abstract base class for services that use TypegooseQueryService.
 * @template Dato - The Typegoose DAO (document) type.
 */
export abstract class ServiceBase<Dato extends Base> extends TypegooseQueryService<Dato> {
  constructor (protected readonly model: ReturnModelType<new () => Dato>) {
    super(model)
  }
}
