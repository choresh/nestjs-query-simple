import { Dto, DtoProp } from 'nestjs-query-simple'

@Dto('TaskSprintJunction', 'input')
export class TaskSprintJunctionInputDto {
  @DtoProp()
    taskId!: string

  @DtoProp()
    sprintId!: string
}

@Dto('TaskSprintJunction', 'update')
export class TaskSprintJunctionUpdateDto {
  @DtoProp({
    nullable: true
  })
    taskId?: string

  @DtoProp()
    sprintId?: string
}
