import { Module } from '@nestjs/common'
import { TaskSprintJunctionsService } from './taskSprintJunctions.service'
import { TaskSprintJunctionsResolver } from './taskSprintJunctions.resolver'
import { TaskSprintJunctionDato } from './datos/taskSprintJunction.dato'
import { ResourceHelper } from 'nestjs-query-simple/dist'

@Module({
  providers: [TaskSprintJunctionsResolver, TaskSprintJunctionsService],
  imports: [
    ResourceHelper.forFeature({
      dtos: [{ DTOClass: TaskSprintJunctionDato }],
      entities: [TaskSprintJunctionDato]
    })
  ]
})

export class TaskSprintJunctionsModule {}
