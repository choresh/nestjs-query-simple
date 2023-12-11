import { InputDto, UpdateDto, DtoProp } from 'nestjs-query-plain/dist'

@InputDto('Sprint')
export class SprintInputDto {
  @DtoProp()
    name!: string
}

@UpdateDto('Sprint')
export class SprintUpdateDto {
  @DtoProp({ nullable: true })
    name?: string
}
