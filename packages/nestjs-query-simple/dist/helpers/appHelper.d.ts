import { type DynamicModule } from '@nestjs/common';
import { type TypegooseModuleAsyncOptions } from '@m8a/nestjs-typegoose';
export type LogFunction = (message: string, ...meta: any[]) => void;
export interface Logger {
    info: LogFunction;
}
export interface AppAsyncOptions {
    typegooseOptions: TypegooseModuleAsyncOptions;
    logger?: Logger;
}
export declare class AppHelper {
    static forRoot(uri: string, logger?: Logger): DynamicModule;
    static forRootAsync(options: AppAsyncOptions): DynamicModule;
}
