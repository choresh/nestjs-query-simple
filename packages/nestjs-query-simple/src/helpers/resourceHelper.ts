import { type DynamicModule } from '@nestjs/common'
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql'
import { NestjsQueryTypegooseModule } from '@ptc-org/nestjs-query-typegoose'
import { type Class } from '@ptc-org/nestjs-query-core'
import { type TypegooseClass } from '@ptc-org/nestjs-query-typegoose/src/typegoose-interface.helpers'

/**
 * Options for configuring a DTO module.
 * @interface DTOModuleOpts
 * @template DTO - The DTO class.
 */
interface DTOModuleOpts<DTO> {
  /**
   * The DTO class.
   * @type {Class<DTO>}
   */
  DTOClass: Class<DTO>

  // You can add other options here if needed.
  // CreateDTOClass?: Class<DTO>;
  // UpdateDTOClass?: Class<DTO>;
}

/**
 * Options for configuring a resource module.
 * @interface ModuleOpts
 */
export interface ModuleOpts {
  /**
   * Array of DTO module options.
   * @type {Array<DTOModuleOpts<unknown>>}
   */
  dtos: Array<DTOModuleOpts<unknown>>

  /**
   * Array of entities (Typegoose classes).
   * @type {TypegooseClass[]}
   */
  entities: TypegooseClass[]
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
      imports: [NestjsQueryTypegooseModule.forFeature(opts.entities)],
      dtos: opts.dtos
    })
  }
}
