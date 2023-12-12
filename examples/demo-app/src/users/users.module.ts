import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersResolver } from './users.resolver'
import { UserDato } from './datos/user.dato'
import { ResourceHelper } from 'nestjs-query-simple/dist'

@Module({
  providers: [UsersResolver, UsersService],
  imports: [
    ResourceHelper.forFeature({
      dtos: [{ DTOClass: UserDato }],
      entities: [UserDato]
    })
  ]
})
export class UsersModule {}
