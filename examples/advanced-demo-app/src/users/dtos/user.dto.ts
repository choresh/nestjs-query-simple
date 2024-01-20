import { InputDto, UpdateDto, DtoProp } from 'nestjs-query-simple'
import { Gender } from '../datos/user.dato'
import { Int } from '@nestjs/graphql'

@InputDto('User')
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

@UpdateDto('User')
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
