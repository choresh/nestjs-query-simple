import { Resolver } from '@nestjs/graphql'
import { TaskSprintJunctionsService } from './taskSprintJunctions.service'
import { TaskSprintJunctionInputDto, TaskSprintJunctionUpdateDto } from './dtos/taskSprintJunction.dto'
import { CRUDResolver } from '@ptc-org/nestjs-query-graphql'
import { TaskSprintJunctionDato } from './datos/taskSprintJunction.dato'

@Resolver(() => TaskSprintJunctionDato)
export class TaskSprintJunctionsResolver extends CRUDResolver(TaskSprintJunctionDato, { CreateDTOClass: TaskSprintJunctionInputDto, UpdateDTOClass: TaskSprintJunctionUpdateDto }) {
  constructor (
    readonly _service: TaskSprintJunctionsService
  ) {
    super(_service)
  }
}
