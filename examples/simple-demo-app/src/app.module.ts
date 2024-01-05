import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo'
import { ExampleItemsModule } from './exampleItems/exampleItems.module'
import { AppHelper } from 'nestjs-query-simple'

@Module({
  imports: [
    AppHelper.forRoot('mongodb://localhost', console),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true
    }),
    ExampleItemsModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
