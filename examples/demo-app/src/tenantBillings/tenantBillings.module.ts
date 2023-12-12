import { Module } from '@nestjs/common'
import { TenantBillingsService } from './tenantBillings.service'
import { TenantBillingsResolver } from './tenantBillings.resolver'
import { TenantBillingDato } from './datos/tenantBilling.dato'
import { ResourceHelper } from 'nestjs-query-simple/dist'
import { TenantsModule } from '../tenants/tenants.module'

@Module({
  providers: [TenantBillingsResolver, TenantBillingsService],
  imports: [
    ResourceHelper.forFeature({
      dtos: [{ DTOClass: TenantBillingDato }],
      entities: [TenantBillingDato]
    }),
    TenantsModule
  ]
})

export class TenantBillingsModule {}
