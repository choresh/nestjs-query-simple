import { Resolver } from '@nestjs/graphql'
import { TaskInputDto, TaskUpdateDto } from './dtos/task.dto'
import { CRUDResolver } from '@ptc-org/nestjs-query-graphql'
import { TasksService } from './tasks.service'
import { TaskDato } from './datos/task.dato'

@Resolver(() => TaskDato)
export class TasksResolver extends CRUDResolver(TaskDato, { CreateDtoClass: TaskInputDto, UpdateDtoClass: TaskUpdateDto }) {
  constructor (
    readonly _service: TasksService
  ) {
    super(_service)
  }
}
