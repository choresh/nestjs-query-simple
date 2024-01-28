import { Dto, DtoProp } from 'nestjs-query-simple'

@Dto('TaskDetails', 'input')
export class TaskDetailsInputDto {
  @DtoProp()
    title!: string

  @DtoProp()
    description!: string
}

@Dto('TaskDetails', 'update')
export class TaskDetailsUpdateDto {
  @DtoProp()
    title?: string

  @DtoProp()
    description?: string
}
