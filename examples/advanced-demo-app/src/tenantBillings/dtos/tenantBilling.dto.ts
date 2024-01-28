import { Dto, DtoProp } from 'nestjs-query-simple'

@Dto('TenantBilling', 'input')
export class TenantBillingInputDto {
  @DtoProp()
    taxNumber: string

  @DtoProp()
    phoneNumber: string

  @DtoProp()
    tenantId: string
}

@Dto('TenantBilling', 'update')
export class TenantBillingUpdateDto {
  @DtoProp()
    taxNumber?: string

  @DtoProp()
    phoneNumber?: string
}
