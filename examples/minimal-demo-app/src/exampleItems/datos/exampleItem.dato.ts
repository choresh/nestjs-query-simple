import { Dato, DatoProp, IdentifiableDato } from 'nestjs-query-simple'

@Dato({ collection: 'exampleItems', name: 'ExampleItem' })
export class ExampleItemDato extends IdentifiableDato {
  @DatoProp()
    exampleProperty1: string

  @DatoProp({ nullable: true })
    exampleProperty2?: string
}
