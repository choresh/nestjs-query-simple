import { InputDto, UpdateDto, DtoProp } from 'nestjs-query-simple/dist'
import { Gender } from '../datos/user.dato'

@InputDto('User')
export class UserInputDto {
  @DtoProp()
    name!: string

  // @DtoProp()
  //   department: string

  @DtoProp()
    tenantId!: string

  @DtoProp({ type: () => Gender })
    gender!: Gender

  @DtoProp()
    age!: number
}

@UpdateDto('User')
export class UserUpdateDto {
  @DtoProp({ nullable: true })
    name?: string

  // @UpdateDtoProp({ nullable: true })
  //   department?: string

  @DtoProp({ nullable: true })
    tenantId?: string

  @DtoProp({ nullable: true, type: () => Gender })
    gender?: Gender

  @DtoProp({ nullable: true })
    age?: number
}
