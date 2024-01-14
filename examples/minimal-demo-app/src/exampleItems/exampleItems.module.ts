import { Module } from '@nestjs/common'
import { ExampleItemsService } from './exampleItems.service'
import { ExampleItemsResolver } from './exampleItems.resolver'
import { ExampleItemDato } from './datos/exampleItem.dato'
import { ResourceHelper } from 'nestjs-query-simple'

@Module({
  providers: [ExampleItemsResolver, ExampleItemsService],
  imports: [
    ResourceHelper.forFeature({
      datos: [ExampleItemDato]
    })
  ],
  exports: [ExampleItemsService]
})

export class ExampleItemsModule {}
