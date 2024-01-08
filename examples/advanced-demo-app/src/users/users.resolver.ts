import { Resolver, Query, Args } from '@nestjs/graphql'
import { UsersInfo, UsersService } from './users.service'
import { UserInputDto, UserUpdateDto } from './dtos/user.dto'
import { CRUDResolver } from '@ptc-org/nestjs-query-graphql'
import { UserDato } from './datos/user.dato'

@Resolver(() => UserDato)
export class UsersResolver extends CRUDResolver(UserDato, { CreateDTOClass: UserInputDto, UpdateDTOClass: UserUpdateDto }) {
  constructor (
    readonly _service: UsersService
  ) {
    super(_service)
  }

  // @Query(() => User)
  // async demonstrateComplexQuery (): Promise<User | null> {
  //   return await this.usersService.demonstrateComplexQuery()
  // }

  @Query(() => UsersInfo)
  async demonstrateComplexQuery (): Promise<UsersInfo> {
    return await this._service.demonstrateComplexQuery()
  }

  @Query(() => [UserDato])
  async demonstrateTransactionBlock (): Promise<UserDato[]> {
    return await this._service.demonstrateTransactionBlock()
  }

  @Query(() => [UserDato])
  async demonstrateTransactionFlow (): Promise<UserDato[]> {
    return await this._service.demonstrateTransactionFlow()
  }

  @Query(() => [UserDato])
  async demonstrateTransactionLock (): Promise<UserDato[]> {
    return await this._service.demonstrateTransactionLock()
  }
}
