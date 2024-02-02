import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { TasksModule } from './tasks/tasks.module'
import { TenantsModule } from './tenants/tenants.module'
import { SprintsModule } from './sprints/sprints.module'
import { TaskSprintJunctionsModule } from './taskSprintJunctions/taskSprintJunctions.module'
import { TenantBillingsModule } from './tenantBillings/tenantBillings.module'
import { AppCommonModule } from 'nestjs-query-simple'

@Module({
  imports: [
    AppCommonModule.forRoot('mongodb://localhost', console),
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
