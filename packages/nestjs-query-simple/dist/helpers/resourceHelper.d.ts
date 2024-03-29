import { type DynamicModule } from '@nestjs/common';
import { type TypegooseClass } from '@ptc-org/nestjs-query-typegoose/src/typegoose-interface.helpers';
export interface ModuleOpts {
    datos: TypegooseClass[];
}
export declare class ResourceHelper {
    static forFeature(opts: ModuleOpts): DynamicModule;
}
