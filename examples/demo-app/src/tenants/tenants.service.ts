import { InjectModel } from '@m8a/nestjs-typegoose'
import { ReturnModelType } from '@typegoose/typegoose'
import { TenantDato } from './datos/tenant.dato'
import { QueryService } from '@ptc-org/nestjs-query-core'
import { ServiceBase } from 'nestjs-query-simple/dist'

@QueryService(TenantDato)
export class TenantsService extends ServiceBase<TenantDato> {
  constructor (@InjectModel(TenantDato) model: ReturnModelType<typeof TenantDato>) {
    super(model)
  }
}
