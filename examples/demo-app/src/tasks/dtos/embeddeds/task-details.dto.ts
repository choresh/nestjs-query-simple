import { InputDto, UpdateDto, DtoProp } from 'nestjs-query-plain/dist'

@InputDto('TaskDetails')
export class TaskDetailsInputDto {
  @DtoProp()
    title!: string

  @DtoProp()
    description!: string
}

@UpdateDto('TaskDetails')
export class TaskDetailsUpdateDto {
  @DtoProp()
    title?: string

  @DtoProp()
    description?: string
}
