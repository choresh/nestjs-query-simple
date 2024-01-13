import { type DynamicModule } from '@nestjs/common'
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql'
import { NestjsQueryTypegooseModule } from '@ptc-org/nestjs-query-typegoose'
import { type Class } from '@ptc-org/nestjs-query-core'
import { type TypegooseClass } from '@ptc-org/nestjs-query-typegoose/src/typegoose-interface.helpers'

/**
 * Options for configuring a DTO module.
 * @interface DtoModuleOpts
 * @template DTO - The DTO class.
 */
export interface DtoModuleOpts<DTO> {
  /**
   * The DTO class.
   * @type {Class<DTO>}
   */
  DTOClass: Class<DTO>
}

/**
 * Options for configuring a resource module.
 * @interface ModuleOpts
 */
export interface ModuleOpts {
  /**
   * Array of DTO classes.
   * @type {Array<DtoModuleOpts<unknown>>}
   */
  dtos: Array<DtoModuleOpts<unknown>>

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
      dtos: opts.dtos
    })
  }
}
