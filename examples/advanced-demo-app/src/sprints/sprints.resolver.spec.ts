import { Test } from '@nestjs/testing'
import { getModelToken } from '@m8a/nestjs-typegoose'
import { SprintDato } from './datos/sprint.dato'
import { SprintsResolver } from './sprints.resolver'
import { SprintsService } from './sprints.service'
import { AppHelper, ResourceHelper } from 'nestjs-query-simple'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { type Connection, connect } from 'mongoose'
import { getModelForClass } from '@typegoose/typegoose'
import { type MutationArgsType, type CreateOneInputType, type UpdateOneInputType, type FindOneArgsType } from '@ptc-org/nestjs-query-graphql'
import { type SprintInputDto, type SprintUpdateDto } from './dtos/sprint.dto'

describe('SprintsResolver', () => {
  let resolver: SprintsResolver
  let mongoDb: MongoMemoryServer
  let mongoConnection: Connection
  let datoId: string

  beforeAll(async () => {
    mongoDb = await MongoMemoryServer.create()
    const uri = mongoDb.getUri()
    mongoConnection = (await connect(uri)).connection

    const module = await Test.createTestingModule({
      providers: [
        SprintsService,
        SprintsResolver,
        {
          provide: getModelToken(SprintDato.name),
          useValue: getModelForClass(SprintDato)
        }
      ],
      imports: [
        AppHelper.forRoot('mongodb://localhost', console),
        ResourceHelper.forFeature({
          datos: [SprintDato]
        })
      ]
    }).compile()

    resolver = module.get<SprintsResolver>(SprintsResolver)
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
    const input: SprintInputDto = {
      name: 'name-1'
    }
    const args: MutationArgsType<CreateOneInputType<SprintInputDto>> = {
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
    const update: SprintUpdateDto = {
      name: 'name-2'
    }
    const args: MutationArgsType<UpdateOneInputType<SprintUpdateDto>> = {
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
