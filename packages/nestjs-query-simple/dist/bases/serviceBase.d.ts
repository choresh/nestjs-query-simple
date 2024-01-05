import { TypegooseQueryService } from '@ptc-org/nestjs-query-typegoose';
import { type Base } from '@typegoose/typegoose/lib/defaultClasses';
import { type ReturnModelType } from '@ptc-org/nestjs-query-typegoose/src/typegoose-types.helper';
export declare abstract class ServiceBase<Dato extends Base> extends TypegooseQueryService<Dato> {
    protected readonly model: ReturnModelType<new () => Dato>;
    constructor(model: ReturnModelType<new () => Dato>);
}
