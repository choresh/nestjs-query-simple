import { Test } from '@nestjs/testing'
import { getModelToken } from '@m8a/nestjs-typegoose'
import { ExampleItemDato } from './datos/exampleItem.dato'
import { ExampleItemsService } from './exampleItems.service'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { type Connection, connect } from 'mongoose'
import { getModelForClass } from '@typegoose/typegoose'
import { type ExampleItemInputDto, type ExampleItemUpdateDto } from './dtos/exampleItem.dto'

describe('ExampleItemsService', () => {
  let service: ExampleItemsService
  let mongoDb: MongoMemoryServer
  let mongoConnection: Connection
  let datoId: string

  beforeAll(async () => {
    mongoDb = await MongoMemoryServer.create()
    const uri = mongoDb.getUri()
    mongoConnection = (await connect(uri)).connection

    const module = await Test.createTestingModule({
      providers: [
        ExampleItemsService,
        {
          provide: getModelToken(ExampleItemDato.name),
          useValue: getModelForClass(ExampleItemDato)
        }
      ]
    }).compile()

    service = module.get<ExampleItemsService>(ExampleItemsService)
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
    const input: ExampleItemInputDto = {
      exampleProperty1: 'val-a'
    }
    const result = await service.createOne(input)
    expect(result.id).toBeDefined()
    datoId = result.id
  })

  it('Should update a dato', async () => {
    expect(datoId).toBeDefined()
    const update: ExampleItemUpdateDto = {
      exampleProperty1: 'val-b',
      exampleProperty2: 'val-c'
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
    expect(result.exampleProperty1 === 'val-b').toBeTruthy()
    expect(result.exampleProperty2 === 'val-c').toBeTruthy()
  })
})
