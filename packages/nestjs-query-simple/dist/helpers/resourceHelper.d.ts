import { type DynamicModule } from '@nestjs/common';
import { type Class } from '@ptc-org/nestjs-query-core';
import { type TypegooseClass } from '@ptc-org/nestjs-query-typegoose/src/typegoose-interface.helpers';
export interface DtoModuleOpts<DTO> {
    DTOClass: Class<DTO>;
}
export interface ModuleOpts {
    dtos: Array<DtoModuleOpts<unknown>>;
    datos: TypegooseClass[];
}
export declare class ResourceHelper {
    static forFeature(opts: ModuleOpts): DynamicModule;
}
