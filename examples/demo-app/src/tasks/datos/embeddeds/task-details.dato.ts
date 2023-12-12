import { Dato, DatoProp, IdentifiableDato } from 'nestjs-query-simple'

@Dato({ name: 'TaskDetails' })
export class TaskDetailsDato extends IdentifiableDato {
  @DatoProp()
    title: string

  @DatoProp()
    description: string
}
