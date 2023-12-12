import { InjectModel } from '@m8a/nestjs-typegoose'
import { ReturnModelType } from '@typegoose/typegoose'
import { TaskSprintJunctionDato } from './datos/taskSprintJunction.dato'
import { QueryService } from '@ptc-org/nestjs-query-core'
import { ServiceBase } from 'nestjs-query-simple/dist'

@QueryService(TaskSprintJunctionDato)
export class TaskSprintJunctionsService extends ServiceBase<TaskSprintJunctionDato> {
  constructor (@InjectModel(TaskSprintJunctionDato) model: ReturnModelType<typeof TaskSprintJunctionDato>) {
    super(model)
  }
}
