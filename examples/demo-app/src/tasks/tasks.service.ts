import { ReturnModelType } from '@typegoose/typegoose'
import { InjectModel } from '@m8a/nestjs-typegoose'
import { TaskDato } from './datos/task.dato'
import { QueryService } from '@ptc-org/nestjs-query-core'
import { ServiceBase } from 'nestjs-query-simple'

@QueryService(TaskDato)
export class TasksService extends ServiceBase<TaskDato> {
  constructor (@InjectModel(TaskDato) model: ReturnModelType<typeof TaskDato>) {
    super(model)
  }
}
