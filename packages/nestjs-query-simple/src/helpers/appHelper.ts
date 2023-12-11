import { type DynamicModule } from '@nestjs/common'
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
 * Options for configuring the AppHelper module.
 */
interface Options {
  typegooseOptions: TypegooseModuleAsyncOptions
  logger?: Logger
}

/**
 * Sets the logger function for Mongoose debug messages.
 * @param logger - The logger object to use for logging.
 */
function setLogger (logger: Logger): void {
  set('debug', (collection: string, method: string, query: any, doc: any): void => {
    logger.info('Mongoose log message:', { collection, method, query, doc })
  })
}

/**
 * Helper class for configuring the TypegooseModule with a logger.
 */
export class AppHelper {
  /**
   * Creates a TypegooseModule forRoot with a specified URI and logger.
   * @param uri - The MongoDB connection URI.
   * @param logger - The logger object to use for logging.
   * @returns A DynamicModule representing the configured TypegooseModule.
   */
  static forRoot (uri: string, logger?: Logger): DynamicModule {
    if (logger !== undefined) {
      setLogger(logger)
    }
    return TypegooseModule.forRoot(uri)
  }

  /**
   * Creates a TypegooseModule forRootAsync with specified options and logger.
   * @param options - Options for configuring the TypegooseModule.
   * @returns A DynamicModule representing the configured TypegooseModule.
   */
  static forRootAsync (options: Options): DynamicModule {
    if (options.logger !== undefined) {
      setLogger(options.logger)
    }
    return TypegooseModule.forRootAsync(options.typegooseOptions)
  }
}
