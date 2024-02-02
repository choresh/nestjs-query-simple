import { Module, DynamicModule } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo'
import { AppHelper, Logger, Options } from 'nestjs-query-simple'

@Module({
  imports: [],
  controllers: [],
  providers: []
})

export class CommonModule {
  static forRoot(uri: string, logger?: Logger): DynamicModule {
    return {
      module: CommonModule,
      imports: [
        AppHelper.forRoot(uri, logger),
        GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          autoSchemaFile: true
        })
      ]
    }
  }

  static forRootAsync(options: Options): DynamicModule {
    return {
      module: CommonModule,
      imports: [
        AppHelper.forRootAsync(options),
        GraphQLModule.forRootAsync<ApolloDriverConfig>({
          driver: ApolloDriver,
          useFactory: () => {
            return {
              autoSchemaFile: true
            }
          }
        })
      ]
    }
  }
}
