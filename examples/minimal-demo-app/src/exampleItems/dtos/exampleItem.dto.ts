import { Dto, DtoProp } from 'nestjs-query-simple'

@Dto('ExampleItem', 'input')
export class ExampleItemInputDto {
  @DtoProp()
    exampleProperty1!: string
}

@Dto('ExampleItem', 'update')
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
