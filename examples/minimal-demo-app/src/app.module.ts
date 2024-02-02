import { Module } from '@nestjs/common'
import { ExampleItemsModule } from './exampleItems/exampleItems.module'
import { CommonModule } from 'nestjs-query-simple'

@Module({
  imports: [
    CommonModule.forRoot('mongodb://localhost', console),
    ExampleItemsModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
