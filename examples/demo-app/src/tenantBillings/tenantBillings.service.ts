/* eslint-disable @typescript-eslint/promise-function-async */

import { InjectModel } from '@m8a/nestjs-typegoose'
import { ReturnModelType, type DocumentType } from '@typegoose/typegoose'
import { TenantBillingDato } from './datos/tenantBilling.dato'
import { QueryService } from '@ptc-org/nestjs-query-core'
import { ServiceBase } from 'nestjs-query-simple'
import { TenantsService } from '../tenants/tenants.service'
import {
  type DeepPartial,
  type DeleteManyResponse,
  type DeleteOneOptions,
  type Filter
} from '@ptc-org/nestjs-query-core'
import { type TenantRelationDto } from '../tenants/dtos/tenant.dto'

@QueryService(TenantBillingDato)
export class TenantBillingsService extends ServiceBase<TenantBillingDato> {
  constructor (@InjectModel(TenantBillingDato) model: ReturnModelType<typeof TenantBillingDato>,
    private readonly _tenantsService: TenantsService) {
    super(model)
  }

  async createOne (
    item: DeepPartial<TenantBillingDato>
  ): Promise<DocumentType<TenantBillingDato>> {
    const result = await super.createOne(item)
    await this._updateRelatedTenant(result.id, result.tenantId, false)
    return result
  }

  async createMany (
    items: Array<DeepPartial<TenantBillingDato>>
  ): Promise<Array<DocumentType<TenantBillingDato>>> {
    const result = await super.createMany(items)
    const promises = result.map((curr) => {
      return this._updateRelatedTenant(curr.id, curr.tenantId, false)
    })
    await Promise.all(promises)
    return result
  }

  async deleteOne (
    id: string,
    opts?: DeleteOneOptions<TenantBillingDato> | undefined
  ): Promise<DocumentType<TenantBillingDato>> {
    const result = await super.deleteOne(id, opts)
    await this._updateRelatedTenant(result.id, result.tenantId, true)
    return result
  }

  async deleteMany (filter: Filter<TenantBillingDato>): Promise<DeleteManyResponse> {
    throw new Error('Method not implemented.')
  }

  private async _updateRelatedTenant (
    id: string,
    footageId: string,
    deleted: boolean
  ): Promise<void> {
    const tenantRelationDto: TenantRelationDto = {
      tenantBillingId: deleted ? undefined : id
    }
    await this._tenantsService.updateOne(
      footageId,
      tenantRelationDto
    )
  }
}
