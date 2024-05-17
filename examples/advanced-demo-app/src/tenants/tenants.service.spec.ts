import { Test } from '@nestjs/testing'
import { getModelToken } from '@m8a/nestjs-typegoose'
import { TenantDato } from './datos/tenant.dato'
import { TenantsService } from './tenants.service'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { type Connection, connect } from 'mongoose'
import { getModelForClass } from '@typegoose/typegoose'
import { type TenantInputDto, type TenantUpdateDto } from './dtos/tenant.dto'

describe('TenantsService', () => {
  let service: TenantsService
  let mongoDb: MongoMemoryServer
  let mongoConnection: Connection
  let datoId: string

  beforeAll(async () => {
    mongoDb = await MongoMemoryServer.create()
    const uri = mongoDb.getUri()
    mongoConnection = (await connect(uri)).connection

    const module = await Test.createTestingModule({
      providers: [
        TenantsService,
        {
          provide: getModelToken(TenantDato.name),
          useValue: getModelForClass(TenantDato)
        }
      ]
    }).compile()

    service = module.get<TenantsService>(TenantsService)
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
    const input: TenantInputDto = {
      name: 'name-1'
    }
    const result = await service.createOne(input)
    expect(result.id).toBeDefined()
    datoId = result.id
  })

  it('Should update a document', async () => {
    expect(datoId).toBeDefined()
    const update: TenantUpdateDto = {
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
