import { Test } from '@nestjs/testing'
import { getModelToken } from '@m8a/nestjs-typegoose'
import { TaskDato } from './datos/task.dato'
import { TasksResolver } from './tasks.resolver'
import { TasksService } from './tasks.service'
import { AppCommonModule, ResourceHelper } from 'nestjs-query-simple'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { type Connection, connect } from 'mongoose'
import { getModelForClass } from '@typegoose/typegoose'
import { type TaskInputDto, type TaskUpdateDto } from './dtos/task.dto'
import { type MutationArgsType, type CreateOneInputType, type UpdateOneInputType, type FindOneArgsType } from '@ptc-org/nestjs-query-graphql'

describe('TasksResolver', () => {
  let resolver: TasksResolver
  let mongoDb: MongoMemoryServer
  let mongoConnection: Connection
  let datoId: string

  beforeAll(async () => {
    mongoDb = await MongoMemoryServer.create()
    const uri = mongoDb.getUri()
    mongoConnection = (await connect(uri)).connection

    const module = await Test.createTestingModule({
      providers: [
        TasksService,
        TasksResolver,
        {
          provide: getModelToken(TaskDato.name),
          useValue: getModelForClass(TaskDato)
        }
      ],
      imports: [
        AppCommonModule.forRoot('mongodb://localhost', console),
        ResourceHelper.forFeature({
          datos: [TaskDato]
        })
      ]
    }).compile()

    resolver = module.get<TasksResolver>(TasksResolver)
  })

  afterAll(async () => {
    await mongoConnection?.dropDatabase()
    await mongoConnection?.close()
    await mongoDb?.stop()
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
    const input: TaskInputDto = {
      name: 'name-1',
      userId: 'userId-1',
      details: {
        title: 'title-1',
        description: 'description-1'
      },
      comments: [{
        text: 'text-1'
      }]
    }
    const args: MutationArgsType<CreateOneInputType<TaskInputDto>> = {
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
    const update: TaskUpdateDto = {
      name: 'name-2'
    }
    const args: MutationArgsType<UpdateOneInputType<TaskUpdateDto>> = {
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
    expect(result?.name === 'name-2').toBeTruthy()
  })
})
