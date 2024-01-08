import { InputDto, UpdateDto, DtoProp } from 'nestjs-query-simple'

@InputDto('TenantBilling')
export class TenantBillingInputDto {
  @DtoProp()
    taxNumber: string

  @DtoProp()
    phoneNumber: string

  @DtoProp()
    tenantId: string
}

@UpdateDto('TenantBilling')
export class TenantBillingUpdateDto {
  @DtoProp()
    taxNumber?: string

  @DtoProp()
    phoneNumber?: string
}