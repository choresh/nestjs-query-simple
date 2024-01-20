import { InputDto, UpdateDto, DtoProp } from 'nestjs-query-simple'

@InputDto('ExampleItem')
export class ExampleItemInputDto {
  @DtoProp()
    exampleProperty1!: string
}

@UpdateDto('ExampleItem')
export class ExampleItemUpdateDto {
  @DtoProp({
    nullable: true
  })
    exampleProperty1?: string

  @DtoProp({
    nullable: true
  })
    exampleProperty2?: string
}
