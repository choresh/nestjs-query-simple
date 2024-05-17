import { Test } from '@nestjs/testing'
import { getModelToken } from '@m8a/nestjs-typegoose'
import { Gender, UserDato } from './datos/user.dato'
import { UsersService } from './users.service'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { type Connection, connect } from 'mongoose'
import { getModelForClass } from '@typegoose/typegoose'
import { type UserInputDto, type UserUpdateDto } from './dtos/user.dto'

describe('UsersService', () => {
  let service: UsersService
  let mongoDb: MongoMemoryServer
  let mongoConnection: Connection
  let datoId: string

  beforeAll(async () => {
    mongoDb = await MongoMemoryServer.create()
    const uri = mongoDb.getUri()
    mongoConnection = (await connect(uri)).connection

    const module = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken(UserDato.name),
          useValue: getModelForClass(UserDato)
        }
      ]
    }).compile()

    service = module.get<UsersService>(UsersService)
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
    expect(service).toBeDefined()
  })

  it('Should create a document', async () => {
    const input: UserInputDto = {
      name: 'name-1',
      tenantId: 'tenantId-1',
      gender: Gender.female,
      age: 30
    }
    const result = await service.createOne(input)
    expect(result.id).toBeDefined()
    datoId = result.id
  })

  it('Should update a document', async () => {
    expect(datoId).toBeDefined()
    const update: UserUpdateDto = {
      name: 'name-2'
    }
    const result = await service.updateOne(datoId, update)
    expect(result.id).toBeDefined()
    expect(result.id === datoId).toBeTruthy()
  })

  it('Should get a document', async () => {
    expect(datoId).toBeDefined()
    const result = await service.getById(datoId)
    expect(result.id).toBeDefined()
    expect(result.id === datoId).toBeTruthy()
    expect(result.name === 'name-2').toBeTruthy()
  })
})
