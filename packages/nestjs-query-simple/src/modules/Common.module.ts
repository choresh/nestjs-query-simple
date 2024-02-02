import { Module, type DynamicModule } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo'
import { type AppAsyncOptions, AppHelper, type Logger } from '..'

@Module({
  imports: [],
  controllers: [],
  providers: []
})

export class CommonModule {
  static forRoot (uri: string, logger?: Logger): DynamicModule {
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

  static forRootAsync (options: AppAsyncOptions): DynamicModule {
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
