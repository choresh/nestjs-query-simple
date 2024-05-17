import { Test } from '@nestjs/testing'
import { getModelToken } from '@m8a/nestjs-typegoose'
import { TenantBillingDato } from './datos/tenantBilling.dato'
import { TenantBillingsService } from './tenantBillings.service'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { type Connection, connect } from 'mongoose'
import { getModelForClass } from '@typegoose/typegoose'
import { type TenantBillingInputDto, type TenantBillingUpdateDto } from './dtos/tenantBilling.dto'
import { TenantDato } from '../tenants/datos/tenant.dato'
import { TenantsService } from '../tenants/tenants.service'

describe('TenantBillingsService', () => {
  let service: TenantBillingsService
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
        TenantsService,
        {
          provide: getModelToken(TenantBillingDato.name),
          useValue: getModelForClass(TenantBillingDato)
        },
        {
          provide: getModelToken(TenantDato.name),
          useValue: getModelForClass(TenantDato)
        }
      ]
    }).compile()

    service = module.get<TenantBillingsService>(TenantBillingsService)

    // Create 'Tenant' dato, to be related (one-to-one) to/from the tested 'TenantBilling' dato.
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
    const input: TenantBillingInputDto = {
      taxNumber: 'taxNumber-1',
      phoneNumber: 'phoneNumber-1',
      tenantId
    }
    const result = await service.createOne(input)
    expect(result.id).toBeDefined()
    datoId = result.id
  })

  it('Should update a document', async () => {
    expect(datoId).toBeDefined()
    const update: TenantBillingUpdateDto = {
      taxNumber: 'taxNumber-2',
      phoneNumber: 'phoneNumber-2'
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
    expect(result.taxNumber === 'taxNumber-2').toBeTruthy()
  })
})
