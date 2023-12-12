import { type Ref } from '@typegoose/typegoose'
import { Dato, DatoProp, IdentifiableDato } from 'nestjs-query-simple/dist'
import { TaskSprintJunctionDato } from '../../taskSprintJunctions/datos/taskSprintJunction.dato'

@Dato({ collection: 'sprints', name: 'Sprint' })
export class SprintDato extends IdentifiableDato {
  @DatoProp()
    name: string

  @DatoProp({
    oneToMany: {
      foreignField: 'sprintId',
      refType: () => TaskSprintJunctionDato
    }
  })
    taskSprintJunctions: Array<Ref<TaskSprintJunctionDato>>
}
