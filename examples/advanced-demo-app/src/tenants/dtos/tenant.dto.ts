import { Dto, DtoProp } from 'nestjs-query-simple'

@Dto('Tenant', 'input')
export class TenantInputDto {
  @DtoProp()
    name!: string
}

@Dto('Tenant', 'update')
export class TenantUpdateDto {
  @DtoProp({
    nullable: true
  })
    name?: string
}

@Dto('TenantRelation', 'update')
export class TenantRelationDto {
  @DtoProp({
    nullable: true
  })
    tenantBillingId?: string
}
