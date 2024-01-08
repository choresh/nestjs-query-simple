import { InjectModel } from '@m8a/nestjs-typegoose'
import { ReturnModelType } from '@typegoose/typegoose'
import { ExampleItemDato } from './datos/exampleItem.dato'
import { QueryService } from '@ptc-org/nestjs-query-core'
import { ServiceBase } from 'nestjs-query-simple'

@QueryService(ExampleItemDato)
export class ExampleItemsService extends ServiceBase<ExampleItemDato> {
  constructor (@InjectModel(ExampleItemDato) model: ReturnModelType<typeof ExampleItemDato>) {
    super(model)
  }
}
