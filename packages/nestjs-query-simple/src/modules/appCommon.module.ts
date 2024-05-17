/* eslint-disable @typescript-eslint/no-explicit-any */
import { Module, type DynamicModule } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver } from '@nestjs/apollo'
import {
  TypegooseModule,
  type TypegooseModuleAsyncOptions
} from '@m8a/nestjs-typegoose'
import { set } from 'mongoose'

/**
 * Represents a function that logs messages.
 * @param message - The log message.
 * @param meta - Additional metadata to include in the log.
 */
export type LogFunction = (message: string, ...meta: any[]) => void

/**
 * Represents a logger object with an 'info' method.
 */
export interface Logger {
  info: LogFunction
}

/**
 * Options for app async configuration.
 */
export interface AppAsyncOptions {
  typegooseOptions: TypegooseModuleAsyncOptions
  logger?: Logger
}

function setLogger (logger: Logger): void {
  set('debug', (collection: string, method: string, query: any, doc: any): void => {
    logger.info('Mongoose log message:', JSON.stringify({ collection, method, query, doc }, null, 4))
  })
}

/**
 * Class that contains methods to import/configure GraphQL and MongoDB modules.
 */
@Module({
  imports: [],
  controllers: [],
  providers: []
})
export class AppCommonModule {
  /**
   * Import/configure GraphQL and MongoDB modules.
   * @static
   * @param {string} uri - The MongoDB connection URI.
   * @param {Logger} logger - The logger object to use for logging at DB level.
   * @returns {DynamicModule} The configured DynamicModule.
   */
  static forRoot (uri: string, logger?: Logger): DynamicModule {
    if (logger !== undefined) {
      setLogger(logger)
    }
    return {
      module: AppCommonModule,
      imports: [
        TypegooseModule.forRoot(uri),
        GraphQLModule.forRoot({
          driver: ApolloDriver,
          autoSchemaFile: true
        })
      ]
    }
  }

  /**
   * Import/configure GraphQL and MongoDB modules.
   * @static
   * @param {AppAsyncOptions} options - The configuration options.
   * @returns {DynamicModule} The configured DynamicModule.
   */
  static forRootAsync (options: AppAsyncOptions): DynamicModule {
    if (options.logger !== undefined) {
      setLogger(options.logger)
    }
    return {
      module: AppCommonModule,
      imports: [
        TypegooseModule.forRootAsync(options.typegooseOptions),
        GraphQLModule.forRootAsync({
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
