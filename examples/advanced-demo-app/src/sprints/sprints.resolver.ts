import { Resolver } from '@nestjs/graphql'
import { SprintsService } from './sprints.service'
import { SprintInputDto, SprintUpdateDto } from './dtos/sprint.dto'
import { CRUDResolver } from '@ptc-org/nestjs-query-graphql'
import { SprintDato } from './datos/sprint.dato'

@Resolver(() => SprintDato)
export class SprintsResolver extends CRUDResolver(SprintDato, { CreateDTOClass: SprintInputDto, UpdateDTOClass: SprintUpdateDto }) {
  constructor (
    readonly _service: SprintsService
  ) {
    super(_service)
  }
}
