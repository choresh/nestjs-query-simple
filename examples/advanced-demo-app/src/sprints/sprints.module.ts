import { Module } from '@nestjs/common'
import { SprintsService } from './sprints.service'
import { SprintsResolver } from './sprints.resolver'
import { SprintDato } from './datos/sprint.dato'
import { ResourceHelper } from 'nestjs-query-simple'

@Module({
  providers: [SprintsResolver, SprintsService],
  imports: [
    ResourceHelper.forFeature({
      datos: [SprintDato]
    })
  ]
})

export class SprintsModule {}
