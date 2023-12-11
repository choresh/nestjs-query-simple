import { Resolver } from '@nestjs/graphql'
import { TenantsService } from './tenants.service'
import { TenantInputDto, TenantUpdateDto } from './dtos/tenant.dto'
import { CRUDResolver } from '@ptc-org/nestjs-query-graphql'
import { TenantDato } from './datos/tenant.dato'

@Resolver(() => TenantDato)
export class TenantsResolver extends CRUDResolver(TenantDato, { CreateDTOClass: TenantInputDto, UpdateDTOClass: TenantUpdateDto }) {
  constructor (
    readonly _service: TenantsService
  ) {
    super(_service)
  }
}
