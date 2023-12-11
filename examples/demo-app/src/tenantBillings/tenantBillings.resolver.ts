import { Resolver } from '@nestjs/graphql'
import { TenantBillingsService } from './tenantBillings.service'
import { TenantBillingInputDto, TenantBillingUpdateDto } from './dtos/tenantBilling.dto'
import { CRUDResolver } from '@ptc-org/nestjs-query-graphql'
import { TenantBillingDato } from './datos/tenantBilling.dato'

@Resolver(() => TenantBillingDato)
export class TenantBillingsResolver extends CRUDResolver(TenantBillingDato, { CreateDTOClass: TenantBillingInputDto, UpdateDTOClass: TenantBillingUpdateDto }) {
  constructor (
    readonly _service: TenantBillingsService
  ) {
    super(_service)
  }
}
