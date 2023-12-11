import { Test } from '@nestjs/testing'
import { getModelToken } from '@m8a/nestjs-typegoose'
import { TenantDato } from './datos/tenant.dato'
import { TenantsResolver } from './tenants.resolver'
import { TenantsService } from './tenants.service'
import { AppHelper, ResourceHelper } from 'nestjs-query-plain/dist'
import { type Connection, connect } from 'mongoose'
import { getModelForClass } from '@typegoose/typegoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { type TenantInputDto, type TenantUpdateDto } from './dtos/tenant.dto'
import { type MutationArgsType, type CreateOneInputType, type UpdateOneInputType, type FindOneArgsType } from '@ptc-org/nestjs-query-graphql'

describe('TenantsResolver', () => {
  let resolver: TenantsResolver
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
        TenantsResolver,
        {
          provide: getModelToken(TenantDato.name),
          useValue: getModelForClass(TenantDato)
        }
      ],
      imports: [
        AppHelper.forRoot('mongodb://localhost', console),
        ResourceHelper.forFeature({
          dtos: [{ DTOClass: TenantDato }],
          entities: [TenantDato]
        })
      ]
    }).compile()

    resolver = module.get<TenantsResolver>(TenantsResolver)
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

  it('Should create an dato', async () => {
    const input: TenantInputDto = {
      name: 'name-1'
    }
    const args: MutationArgsType<CreateOneInputType<TenantInputDto>> = {
      input: {
        input
      }
    }
    const result = await resolver.createOne(args)
    expect(result.id).toBeDefined()
    datoId = result.id
  })

  it('Should update an dato', async () => {
    expect(datoId).toBeDefined()
    const update: TenantUpdateDto = {
      name: 'name-2'
    }
    const args: MutationArgsType<UpdateOneInputType<TenantUpdateDto>> = {
      input: {
        id: datoId,
        update
      }
    }
    const result = await resolver.updateOne(args)
    expect(result.id).toBeDefined()
    expect(result.id === datoId).toBeTruthy()
  })

  it('Should get an dato', async () => {
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
