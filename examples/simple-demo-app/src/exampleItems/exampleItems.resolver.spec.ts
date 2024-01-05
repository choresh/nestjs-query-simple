import { Test } from '@nestjs/testing'
import { getModelToken } from '@m8a/nestjs-typegoose'
import { ExampleItemDato } from './datos/exampleItem.dato'
import { ExampleItemsResolver } from './exampleItems.resolver'
import { ExampleItemsService } from './exampleItems.service'
import { AppHelper, ResourceHelper } from 'nestjs-query-simple'
import { type Connection, connect } from 'mongoose'
import { getModelForClass } from '@typegoose/typegoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { type ExampleItemInputDto, type ExampleItemUpdateDto } from './dtos/exampleItem.dto'
import { type MutationArgsType, type CreateOneInputType, type UpdateOneInputType, type FindOneArgsType } from '@ptc-org/nestjs-query-graphql'

describe('ExampleItemsResolver', () => {
  let resolver: ExampleItemsResolver
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
        ExampleItemsResolver,
        {
          provide: getModelToken(ExampleItemDato.name),
          useValue: getModelForClass(ExampleItemDato)
        }
      ],
      imports: [
        AppHelper.forRoot('mongodb://localhost', console),
        ResourceHelper.forFeature({
          dtos: [{ DTOClass: ExampleItemDato }],
          entities: [ExampleItemDato]
        })
      ]
    }).compile()

    resolver = module.get<ExampleItemsResolver>(ExampleItemsResolver)
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

  it('Should create a dato', async () => {
    const input: ExampleItemInputDto = {
      exampleProperty1: 'val-a'
    }
    const args: MutationArgsType<CreateOneInputType<ExampleItemInputDto>> = {
      input: {
        input
      }
    }
    const result = await resolver.createOne(args)
    expect(result.id).toBeDefined()
    datoId = result.id
  })

  it('Should update a dato', async () => {
    expect(datoId).toBeDefined()
    const update: ExampleItemUpdateDto = {
     exampleProperty1: 'val-b',
     exampleProperty2: 'val-c'
    }
    const args: MutationArgsType<UpdateOneInputType<ExampleItemUpdateDto>> = {
      input: {
        id: datoId,
        update
      }
    }
    const result = await resolver.updateOne(args)
    expect(result.id).toBeDefined()
    expect(result.id === datoId).toBeTruthy()
  })

  it('Should get a dato', async () => {
    expect(datoId).toBeDefined()
    const args: FindOneArgsType = {
      id: datoId
    }
    const result = await resolver.findById(args)
    expect(result?.id).toBeDefined()
    expect(result?.id === datoId).toBeTruthy()
    expect(result?.exampleProperty1 === 'val-b').toBeTruthy()
    expect(result?.exampleProperty2 === 'val-c').toBeTruthy()
  })
})
