import { Dato, DatoProp, IdentifiableDato } from 'nestjs-query-simple/dist'

@Dato({ name: 'TaskDetails' })
export class TaskDetailsDato extends IdentifiableDato {
  @DatoProp()
    title: string

  @DatoProp()
    description: string
}
