import { InputDto, UpdateDto, DtoProp } from 'nestjs-query-simple'
import { TaskDetailsInputDto, TaskDetailsUpdateDto } from './embeddeds/task-details.dto'
import { TaskCommentInputDto, TaskCommentUpdateDto } from './embeddeds/task-comment.dto'

@InputDto('Task')
export class TaskInputDto {
  @DtoProp()
    name!: string

  @DtoProp()
    userId!: string

  @DtoProp({
    type: () => TaskDetailsInputDto
  })
    details!: TaskDetailsInputDto

  @DtoProp({
    type: () => TaskCommentInputDto
  })
    comments!: [TaskCommentInputDto]
}

@UpdateDto('Task')
export class TaskUpdateDto {
  @DtoProp({
    nullable: true
  })
    name?: string

  @DtoProp({
    nullable: true
  })
    userId?: string

  @DtoProp({
    nullable: true,
    type: () => TaskDetailsUpdateDto
  })
    details?: TaskDetailsUpdateDto

  @DtoProp({
    nullable: true,
    type: () => TaskCommentUpdateDto
  })
    comments?: [TaskCommentUpdateDto]
}
