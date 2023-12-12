import { Module } from '@nestjs/common'
import { TenantsService } from './tenants.service'
import { TenantsResolver } from './tenants.resolver'
import { TenantDato } from './datos/tenant.dato'
import { ResourceHelper } from 'nestjs-query-simple/dist'

@Module({
  providers: [TenantsResolver, TenantsService],
  imports: [
    ResourceHelper.forFeature({
      dtos: [{ DTOClass: TenantDato }],
      entities: [TenantDato]
    })
  ],
  exports: [TenantsService]
})

export class TenantsModule {}
