import { InjectModel } from '@m8a/nestjs-typegoose'
import { ReturnModelType } from '@typegoose/typegoose'
import { SprintDato } from './datos/sprint.dato'
import { QueryService } from '@ptc-org/nestjs-query-core'
import { ServiceBase } from 'nestjs-query-simple/dist'

@QueryService(SprintDato)
export class SprintsService extends ServiceBase<SprintDato> {
  constructor (@InjectModel(SprintDato) model: ReturnModelType<typeof SprintDato>) {
    super(model)
  }
}
