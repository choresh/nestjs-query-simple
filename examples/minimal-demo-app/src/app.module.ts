import { Module } from '@nestjs/common'
import { ExampleItemsModule } from './exampleItems/exampleItems.module'
import { AppCommonModule } from 'nestjs-query-simple'

@Module({
  imports: [
    AppCommonModule.forRoot('mongodb://localhost', console),
    ExampleItemsModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
