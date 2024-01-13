import { Resolver } from '@nestjs/graphql'
import { ExampleItemsService } from './exampleItems.service'
import { ExampleItemInputDto, ExampleItemUpdateDto } from './dtos/exampleItem.dto'
import { CRUDResolver } from '@ptc-org/nestjs-query-graphql'
import { ExampleItemDato } from './datos/exampleItem.dato'

@Resolver(() => ExampleItemDato)
export class ExampleItemsResolver extends CRUDResolver(ExampleItemDato, { CreateDtoClass: ExampleItemInputDto, UpdateDtoClass: ExampleItemUpdateDto }) {
  constructor (
    readonly _service: ExampleItemsService
  ) {
    super(_service)
  }
}
