import { Dto, DtoProp } from 'nestjs-query-simple'

@Dto('Sprint', 'input')
export class SprintInputDto {
  @DtoProp()
    name!: string
}

@Dto('Sprint', 'update')
export class SprintUpdateDto {
  @DtoProp({
    nullable: true
  })
    name?: string
}
