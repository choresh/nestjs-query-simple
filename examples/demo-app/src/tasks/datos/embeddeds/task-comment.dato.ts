import { Dato, DatoProp, IdentifiableDato } from 'nestjs-query-simple/dist'

@Dato({ name: 'TaskComment' })
export class TaskCommentDato extends IdentifiableDato {
  @DatoProp()
    text: string
}
