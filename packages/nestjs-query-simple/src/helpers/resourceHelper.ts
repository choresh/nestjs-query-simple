import { type DynamicModule } from '@nestjs/common'
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql'
import { NestjsQueryTypegooseModule } from '@ptc-org/nestjs-query-typegoose'
import { type Class } from '@ptc-org/nestjs-query-core'
import { type TypegooseClass } from '@ptc-org/nestjs-query-typegoose/src/typegoose-interface.helpers'

/**
 * Options for configuring a resource module.
 * @interface ModuleOpts
 */
export interface ModuleOpts {
  /**
   * Array of DTO classes.
   * @type {Class<unknown>[]}
   */
  dtos: Class<unknown>[]

  /**
   * Array of DATO classes.
   * @type {TypegooseClass[]}
   */
  datos: TypegooseClass[]
}

/**
 * Utility class for configuring a resource module.
 * @class
 */
export class ResourceHelper {
  /**
   * Creates a DynamicModule for the resource with the provided options.
   * @static
   * @param {ModuleOpts} opts - The configuration options.
   * @returns {DynamicModule} The configured DynamicModule.
   */
  static forFeature (opts: ModuleOpts): DynamicModule {
    return NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypegooseModule.forFeature(opts.datos)],
      dtos: opts.dtos.map(curr => {
        return {
          DTOClass: curr
        }
      })
    })
  }
}
