import { Dto, DtoProp } from 'nestjs-query-simple'
import { Gender } from '../datos/user.dato'
import { Int } from '@nestjs/graphql'

@Dto('User', 'input')
export class UserInputDto {
  @DtoProp()
    name!: string

  @DtoProp()
    tenantId!: string

  @DtoProp({
    type: () => Gender
  })
    gender!: Gender

  @DtoProp({
    type: () => Int
  })
    age!: number
}

@Dto('User', 'update')
export class UserUpdateDto {
  @DtoProp({
    nullable: true
  })
    name?: string

  @DtoProp({
    nullable: true
  })
    tenantId?: string

  @DtoProp({
    nullable: true,
    type: () => Gender
  })
    gender?: Gender

  @DtoProp({
    nullable: true,
    type: () => Int
  })
    age?: number
}
