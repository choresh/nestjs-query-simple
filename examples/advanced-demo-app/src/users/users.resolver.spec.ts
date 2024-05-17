import { Test } from '@nestjs/testing'
import { getModelToken } from '@m8a/nestjs-typegoose'
import { Gender, UserDato } from './datos/user.dato'
import { UsersResolver } from './users.resolver'
import { UsersService } from './users.service'
import { AppCommonModule, ResourceHelper } from 'nestjs-query-simple'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { type Connection, connect } from 'mongoose'
import { getModelForClass } from '@typegoose/typegoose'
import { type UserInputDto, type UserUpdateDto } from './dtos/user.dto'
import { type MutationArgsType, type CreateOneInputType, type UpdateOneInputType, type FindOneArgsType } from '@ptc-org/nestjs-query-graphql'

describe('UsersResolver', () => {
  let resolver: UsersResolver
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
        UsersResolver,
        {
          provide: getModelToken(UserDato.name),
          useValue: getModelForClass(UserDato)
        }
      ],
      imports: [
        AppCommonModule.forRoot('mongodb://localhost', console),
        ResourceHelper.forFeature({
          datos: [UserDato]
        })
      ]
    }).compile()

    resolver = module.get<UsersResolver>(UsersResolver)
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
    const input: UserInputDto = {
      name: 'name-1',
      tenantId: 'tenantId-1',
      gender: Gender.female,
      age: 30
    }
    const args: MutationArgsType<CreateOneInputType<UserInputDto>> = {
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
    const update: UserUpdateDto = {
      name: 'name-2'
    }
    const args: MutationArgsType<UpdateOneInputType<UserUpdateDto>> = {
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
