import { InputDto, UpdateDto, DtoProp } from 'nestjs-query-simple/dist'

@InputDto('TaskComment')
export class TaskCommentInputDto {
  @DtoProp()
    text!: string
}

@UpdateDto('TaskComment')
export class TaskCommentUpdateDto {
  @DtoProp()
    text?: string
}
