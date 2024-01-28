import { Dto, DtoProp } from 'nestjs-query-simple'

@Dto('TaskComment', 'input')
export class TaskCommentInputDto {
  @DtoProp()
    text!: string
}

@Dto('TaskComment', 'update')
export class TaskCommentUpdateDto {
  @DtoProp()
    text?: string
}
