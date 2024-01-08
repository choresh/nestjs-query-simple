import { Dato, DatoProp, IdentifiableDato } from 'nestjs-query-simple'

@Dato({ name: 'TaskComment' })
export class TaskCommentDato extends IdentifiableDato {
  @DatoProp()
    text: string
}
