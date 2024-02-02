import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo'
import { UsersModule } from './users/users.module'
import { TasksModule } from './tasks/tasks.module'
import { TenantsModule } from './tenants/tenants.module'
import { SprintsModule } from './sprints/sprints.module'
import { TaskSprintJunctionsModule } from './taskSprintJunctions/taskSprintJunctions.module'
import { TenantBillingsModule } from './tenantBillings/tenantBillings.module'
import { CommonModule } from 'nestjs-query-simple'

@Module({
  imports: [
    CommonModule.forRoot('mongodb://localhost', console),
    UsersModule,
    TasksModule,
    TenantsModule,
    SprintsModule,
    TenantBillingsModule,
    TaskSprintJunctionsModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
