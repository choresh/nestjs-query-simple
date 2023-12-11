import { Dato, DatoProp, IdentifiableDato } from 'nestjs-query-plain/dist'

@Dato({ name: 'TaskDetails' })
export class TaskDetailsDato extends IdentifiableDato {
  @DatoProp()
    title: string

  @DatoProp()
    description: string
}
