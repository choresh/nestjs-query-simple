import { Dato, DatoProp, IdentifiableDato } from 'nestjs-query-simple'
import { type Ref } from '@typegoose/typegoose'
import { TenantDato } from '../../tenants/datos/tenant.dato'
import { Index } from '@typegoose/typegoose'

@Index(
  { tenantId: 1 },
  {
    unique: true
  }
)
@Dato({ collection: 'tenantBillings', name: 'TenantBilling' })
export class TenantBillingDato extends IdentifiableDato {
  @DatoProp()
    taxNumber: string

  @DatoProp()
    phoneNumber: string

  @DatoProp({
    oneToOne: {
      localField: 'tenantId',
      refType: () => TenantDato
    }
  })
    tenant: Ref<TenantDato>

  @DatoProp()
    tenantId: string
}
