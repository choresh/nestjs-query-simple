import { type DynamicModule } from '@nestjs/common';
import { type AppAsyncOptions, type Logger } from '..';
export declare class CommonModule {
    static forRoot(uri: string, logger?: Logger): DynamicModule;
    static forRootAsync(options: AppAsyncOptions): DynamicModule;
}
