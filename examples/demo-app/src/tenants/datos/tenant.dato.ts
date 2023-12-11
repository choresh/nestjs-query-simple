import { UserDato } from '../../users/datos/user.dato'
import { type Ref } from '@typegoose/typegoose'
import { Dato, DatoProp, IdentifiableDato } from 'nestjs-query-plain/dist'
import { TenantBillingDato } from '../../tenantBillings/datos/tenantBilling.dato'
import { Index } from '@typegoose/typegoose'

@Index(
  { tenantBillingId: 1 },
  {
    unique: true,
    partialFilterExpression: { tenantBillingId: { $ne: null } }
  }
)
@Dato({ collection: 'tenants', name: 'Tenant' })
export class TenantDato extends IdentifiableDato {
  @DatoProp()
    name: string

  @DatoProp({
    oneToMany: {
      foreignField: 'tenantId',
      refType: () => UserDato
    }
  })
    users: Array<Ref<UserDato>>

  @DatoProp({
    nullable: true,
    oneToOne: {
      localField: 'tenantBillingId',
      refType: () => TenantBillingDato
    }
  })
    tenantBilling?: Ref<TenantBillingDato>

  @DatoProp({ nullable: true })
    tenantBillingId?: string
}
