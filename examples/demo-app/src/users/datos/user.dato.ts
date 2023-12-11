import { Index, type Ref } from '@typegoose/typegoose'
import { TaskDato } from '../../tasks/datos/task.dato'
import { Dato, DatoProp, IdentifiableDato } from 'nestjs-query-plain/dist'
import { TenantDato } from '../../tenants/datos/tenant.dato'
import { registerEnumType } from '@nestjs/graphql'

export enum Gender {
  female = 'female',
  male = 'male',
}
registerEnumType(Gender, { name: 'Gender' })

@Dato({ collection: 'users', name: 'User' })
@Index({ tenantId: 1, name: 1 }, { unique: true })
export class UserDato extends IdentifiableDato {
  @DatoProp()
    name: string

  // @DatoProp()
  //   department: string

  @DatoProp({
    oneToMany: {
      foreignField: 'userId',
      refType: () => TaskDato
    }
  })
    tasks: Array<Ref<TaskDato>>

  @DatoProp()
    tenantId: string

  @DatoProp({
    manyToOne: {
      localField: 'tenantId',
      refType: () => TenantDato
    }
  })
    tenant: Ref<TenantDato>

  @DatoProp({
    type: () => Gender
  })
    gender: Gender

  @DatoProp()
    age: number
}
