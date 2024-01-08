import { Test } from '@nestjs/testing'
import { getModelToken } from '@m8a/nestjs-typegoose'
import { TenantBillingDato } from './datos/tenantBilling.dato'
import { TenantBillingsResolver } from './tenantBillings.resolver'
import { TenantBillingsService } from './tenantBillings.service'
import { AppHelper, ResourceHelper } from 'nestjs-query-simple'
import { type Connection, connect } from 'mongoose'
import { getModelForClass } from '@typegoose/typegoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { type TenantBillingInputDto, type TenantBillingUpdateDto } from './dtos/tenantBilling.dto'
import { type MutationArgsType, type CreateOneInputType, type UpdateOneInputType, type FindOneArgsType } from '@ptc-org/nestjs-query-graphql'
import { TenantDato } from '../tenants/datos/tenant.dato'
import { TenantsService } from '../tenants/tenants.service'

describe('TenantBillingsResolver', () => {
  let resolver: TenantBillingsResolver
  let mongoDb: MongoMemoryServer
  let mongoConnection: Connection
  let datoId: string
  let tenantId: string

  beforeAll(async () => {
    mongoDb = await MongoMemoryServer.create()
    const uri = mongoDb.getUri()
    mongoConnection = (await connect(uri)).connection

    const module = await Test.createTestingModule({
      providers: [
        TenantBillingsService,
        TenantBillingsResolver,
        TenantsService,
        {
          provide: getModelToken(TenantBillingDato.name),
          useValue: getModelForClass(TenantBillingDato)
        },
        {
          provide: getModelToken(TenantDato.name),
          useValue: getModelForClass(TenantDato)
        }
      ],
      imports: [
        AppHelper.forRoot('mongodb://localhost', console),
        ResourceHelper.forFeature({
          dtos: [{ DTOClass: TenantBillingDato }],
          entities: [TenantBillingDato]
        })
      ]
    }).compile()

    resolver = module.get<TenantBillingsResolver>(TenantBillingsResolver)

    // Create 'Tenant' dato, to be related (one-to-one) to/from the tested 'TenantBillingDato' entities.
    const tenantDatoInput = {
      name: 'tenant-1'
    }
    tenantId = (
      await module
        .get<TenantsService>(TenantsService)
        .createOne(tenantDatoInput)
    ).id
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
    const input: TenantBillingInputDto = {
      taxNumber: 'taxNumber-1',
      phoneNumber: 'phoneNumber-1',
      tenantId
    }
    const args: MutationArgsType<CreateOneInputType<TenantBillingInputDto>> = {
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
    const update: TenantBillingUpdateDto = {
      taxNumber: 'taxNumber-2',
      phoneNumber: 'phoneNumber-2'
    }
    const args: MutationArgsType<UpdateOneInputType<TenantBillingUpdateDto>> = {
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
    expect(result?.taxNumber === 'taxNumber-2').toBeTruthy()
  })
})
