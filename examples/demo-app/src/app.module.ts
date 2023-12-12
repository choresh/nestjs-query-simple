import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo'
import { UsersModule } from './users/users.module'
import { TasksModule } from './tasks/tasks.module'
import { TenantsModule } from './tenants/tenants.module'
import { SprintsModule } from './sprints/sprints.module'
import { TaskSprintJunctionsModule } from './taskSprintJunctions/taskSprintJunctions.module'
import { AppHelper } from 'nestjs-query-simple'
import { TenantBillingsModule } from './tenantBillings/tenantBillings.module'

@Module({
  imports: [
    AppHelper.forRoot('mongodb://localhost', console),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true
    }),
    UsersModule,
    TasksModule,
    TenantsModule,
    SprintsModule,
    TenantBillingsModule,
    TaskSprintJunctionsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
