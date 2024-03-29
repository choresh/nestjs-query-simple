import { Module } from '@nestjs/common'
import { TenantsService } from './tenants.service'
import { TenantsResolver } from './tenants.resolver'
import { TenantDato } from './datos/tenant.dato'
import { ResourceHelper } from 'nestjs-query-simple'

@Module({
  providers: [TenantsResolver, TenantsService],
  imports: [
    ResourceHelper.forFeature({
      datos: [TenantDato]
    })
  ],
  exports: [TenantsService]
})

export class TenantsModule {}
