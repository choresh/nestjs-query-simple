import { Test } from '@nestjs/testing'
import { getModelToken } from '@m8a/nestjs-typegoose'
import { TaskDato } from './datos/task.dato'
import { TasksService } from './tasks.service'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { type Connection, connect } from 'mongoose'
import { getModelForClass } from '@typegoose/typegoose'
import { type TaskUpdateDto, type TaskInputDto } from './dtos/task.dto'

describe('TasksService', () => {
  let service: TasksService
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
        {
          provide: getModelToken(TaskDato.name),
          useValue: getModelForClass(TaskDato)
        }
      ]
    }).compile()

    service = module.get<TasksService>(TasksService)
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
    expect(service).toBeDefined()
  })

  it('Should create a dato', async () => {
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
    const result = await service.createOne(input)
    expect(result.id).toBeDefined()
    datoId = result.id
  })

  it('Should update a dato', async () => {
    expect(datoId).toBeDefined()
    const update: TaskUpdateDto = {
      name: 'name-2'
    }
    const result = await service.updateOne(datoId, update)
    expect(result.id).toBeDefined()
    expect(result.id === datoId).toBeTruthy()
  })

  it('Should get a dato', async () => {
    expect(datoId).toBeDefined()
    const result = await service.getById(datoId)
    expect(result.id).toBeDefined()
    expect(result.id === datoId).toBeTruthy()
    expect(result.name === 'name-2').toBeTruthy()
  })
})
