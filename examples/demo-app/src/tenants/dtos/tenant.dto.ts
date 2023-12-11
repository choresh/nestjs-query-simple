import { InputDto, UpdateDto, DtoProp } from 'nestjs-query-plain/dist'

@InputDto('Tenant')
export class TenantInputDto {
  @DtoProp()
    name!: string
}

@UpdateDto('Tenant')
export class TenantUpdateDto {
  @DtoProp({ nullable: true })
    name?: string
}

@UpdateDto('TenantRelation')
export class TenantRelationDto {
  @DtoProp({ nullable: true })
    tenantBillingId?: string
}
