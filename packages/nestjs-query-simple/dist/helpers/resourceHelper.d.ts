import { type DynamicModule } from '@nestjs/common';
import { type Class } from '@ptc-org/nestjs-query-core';
import { type TypegooseClass } from '@ptc-org/nestjs-query-typegoose/src/typegoose-interface.helpers';
interface DTOModuleOpts<DTO> {
    DTOClass: Class<DTO>;
}
export interface ModuleOpts {
    dtos: Array<DTOModuleOpts<unknown>>;
    entities: TypegooseClass[];
}
export declare class ResourceHelper {
    static forFeature(opts: ModuleOpts): DynamicModule;
}
export {};
