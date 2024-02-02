import { Test } from '@nestjs/testing'
import { getModelToken } from '@m8a/nestjs-typegoose'
import { TaskSprintJunctionDato } from './datos/taskSprintJunction.dato'
import { TaskSprintJunctionsResolver } from './taskSprintJunctions.resolver'
import { TaskSprintJunctionsService } from './taskSprintJunctions.service'
import { AppCommonModule, ResourceHelper } from 'nestjs-query-simple'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { type Connection, connect } from 'mongoose'
import { getModelForClass } from '@typegoose/typegoose'
import { type TaskSprintJunctionInputDto, type TaskSprintJunctionUpdateDto } from './dtos/taskSprintJunction.dto'
import { type MutationArgsType, type CreateOneInputType, type UpdateOneInputType, type FindOneArgsType } from '@ptc-org/nestjs-query-graphql'

describe('TaskSprintJunctionsResolver', () => {
  let resolver: TaskSprintJunctionsResolver
  let mongoDb: MongoMemoryServer
  let mongoConnection: Connection
  let datoId: string

  beforeAll(async () => {
    mongoDb = await MongoMemoryServer.create()
    const uri = mongoDb.getUri()
    mongoConnection = (await connect(uri)).connection

    const module = await Test.createTestingModule({
      providers: [
        TaskSprintJunctionsService,
        TaskSprintJunctionsResolver,
        {
          provide: getModelToken(TaskSprintJunctionDato.name),
          useValue: getModelForClass(TaskSprintJunctionDato)
        }
      ],
      imports: [
        AppCommonModule.forRoot('mongodb://localhost', console),
        ResourceHelper.forFeature({
          datos: [TaskSprintJunctionDato]
        })
      ]
    }).compile()

    resolver = module.get<TaskSprintJunctionsResolver>(TaskSprintJunctionsResolver)
  })

  afterAll(async () => {
    await mongoConnection.dropDatabase()
    await mongoConnection.close()
    await mongoDb.stop()
  })

  beforeEach(async () => {})

  afterEach(async () => {
    /*
    const collections = mongoConnection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    }
    */
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  it('Should create a document', async () => {
    const input: TaskSprintJunctionInputDto = {
      taskId: 'taskId-1',
      sprintId: 'sprintId-1'
    }
    const args: MutationArgsType<CreateOneInputType<TaskSprintJunctionInputDto>> = {
      input: {
        input
      }
    }
    const result = await resolver.createOne(args)
    expect(result.id).toBeDefined()
    datoId = result.id
  })

  it('Should update a document', async () => {
    expect(datoId).toBeDefined()
    const update: TaskSprintJunctionUpdateDto = {
      taskId: 'taskId-2'
    }
    const args: MutationArgsType<UpdateOneInputType<TaskSprintJunctionUpdateDto>> = {
      input: {
        id: datoId,
        update
      }
    }
    const result = await resolver.updateOne(args)
    expect(result.id).toBeDefined()
    expect(result.id === datoId).toBeTruthy()
  })

  it('Should get a document', async () => {
    expect(datoId).toBeDefined()
    const args: FindOneArgsType = {
      id: datoId
    }
    const result = await resolver.findById(args)
    expect(result?.id).toBeDefined()
    expect(result?.id === datoId).toBeTruthy()
    expect(result?.taskId === 'taskId-2').toBeTruthy()
  })
})
