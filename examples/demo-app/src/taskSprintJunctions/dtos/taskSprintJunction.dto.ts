import { InputDto, UpdateDto, DtoProp } from 'nestjs-query-plain/dist'

@InputDto('TaskSprintJunction')
export class TaskSprintJunctionInputDto {
  @DtoProp()
    taskId!: string

  @DtoProp()
    sprintId!: string
}

@UpdateDto('TaskSprintJunction')
export class TaskSprintJunctionUpdateDto {
  @DtoProp({
    nullable: true
  })
    taskId?: string

  @DtoProp()
    sprintId?: string
}
