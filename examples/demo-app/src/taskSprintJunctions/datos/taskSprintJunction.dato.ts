import { type Ref } from '@typegoose/typegoose'
import { Dato, DatoProp, IdentifiableDato } from 'nestjs-query-simple/dist'
import { SprintDato } from '../../sprints/datos/sprint.dato'
import { TaskDato } from '../../tasks/datos/task.dato'

@Dato({ collection: 'taskSprintJunctions', name: 'TaskSprintJunction' })
export class TaskSprintJunctionDato extends IdentifiableDato {
  @DatoProp()
    taskId!: string

  @DatoProp()
    sprintId!: string

  @DatoProp({
    manyToOne: {
      localField: 'taskId',
      refType: () => TaskDato
    }
  })
    task: Ref<TaskDato>

  @DatoProp({
    manyToOne: {
      localField: 'sprintId',
      refType: () => SprintDato
    }
  })
    sprint: Ref<SprintDato>
}
