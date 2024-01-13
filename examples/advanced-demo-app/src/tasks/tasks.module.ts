import { Module } from '@nestjs/common'
import { TasksService } from './tasks.service'
import { TasksResolver } from './tasks.resolver'
import { TaskDato } from './datos/task.dato'
import { ResourceHelper } from 'nestjs-query-simple'

@Module({
  providers: [TasksResolver, TasksService],
  imports: [
    ResourceHelper.forFeature({
      dtos: [{ DTOClass: TaskDato }],
      datos: [TaskDato]
    })
  ]
})

export class TasksModule {}
