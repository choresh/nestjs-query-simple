import { Dato, DatoProp, IdentifiableDato } from 'nestjs-query-simple'
import { TaskCommentDato } from './embeddeds/task-comment.dato'
import { TaskDetailsDato } from './embeddeds/task-details.dato'
import { UserDato } from '../../users/datos/user.dato'
import { Ref } from '@typegoose/typegoose'
import { TaskSprintJunctionDato } from '../../taskSprintJunctions/datos/taskSprintJunction.dato'

@Dato({ collection: 'tasks', name: 'Task' })
export class TaskDato extends IdentifiableDato {
  @DatoProp()
    name: string

  @DatoProp()
    userId: string

  @DatoProp({
    manyToOne: {
      localField: 'userId',
      refType: () => UserDato
    }
  })
    user: Ref<UserDato>

  @DatoProp({
    type: () => TaskDetailsDato
  })
    details: TaskDetailsDato

  @DatoProp({
    type: () => TaskCommentDato
  })
    comments: TaskCommentDato[]

  @DatoProp({
    oneToMany: {
      foreignField: 'taskId',
      refType: () => TaskSprintJunctionDato
    }
  })
    taskSprintJunctions: Array<Ref<TaskSprintJunctionDato>>
}
