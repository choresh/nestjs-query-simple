import { Dato, DatoProp, IdentifiableDato } from 'nestjs-query-plain/dist'

@Dato({ name: 'TaskComment' })
export class TaskCommentDato extends IdentifiableDato {
  @DatoProp()
    text: string
}
