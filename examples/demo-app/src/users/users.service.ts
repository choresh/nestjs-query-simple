import { ReturnModelType } from '@typegoose/typegoose'
import { InjectModel } from '@m8a/nestjs-typegoose'
import { Gender, UserDato } from './datos/user.dato'
import { QueryService } from '@ptc-org/nestjs-query-core'
import { Dato, DatoProp, ServiceBase } from 'nestjs-query-simple'

async function sleep (ms: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms))
}

@Dato({ name: 'GenderInfo', outputOnly: true })
export class GenderInfo {
  @DatoProp()
    count: number

  @DatoProp()
    avgAge: number
}

@Dato({ name: 'UsersInfo', outputOnly: true })
export class UsersInfo {
  @DatoProp()
    females?: GenderInfo

  @DatoProp()
    males?: GenderInfo
}

@QueryService(UserDato)
export class UsersService extends ServiceBase<UserDato> {
  constructor (@InjectModel(UserDato) model: ReturnModelType<typeof UserDato>) {
    super(model)
  }

  async findOneByIndex (tenantId: string, name: string): Promise<UserDato> {
    const obj = await this.model.findOne({ tenantId, name })
    if (obj == null) {
      throw new Error('Tenant not found')
    }
    return obj
  }

  async demonstrateComplexQuery (): Promise<UsersInfo> {
    const result = await this.model.aggregate([
      {
        $group: {
          _id: '$gender',
          count: { $sum: 1 },
          avgAgeFemales: {
            $avg: { $cond: [{ $eq: ['$gender', 'female'] }, '$age', null] }
          },
          avgAgeMales: {
            $avg: { $cond: [{ $eq: ['$gender', 'male'] }, '$age', null] }
          }
        }
      }
    ])

    const usersInfo: UsersInfo = {}

    result.forEach((currResult) => {
      switch (currResult._id) {
        case 'female':
          usersInfo.females = {
            count: currResult.count,
            avgAge: currResult.avgAgeFemales
          }
          break
        case 'male':
          usersInfo.males = {
            count: currResult.count,
            avgAge: currResult.avgAgeMales
          }
          break
        default:
          throw new Error('Unexpected case')
      }
    })

    return usersInfo
  }

  // async demonstrateComplexQuery (): Promise<User | null> {
  //   const result = await this._model
  //     .aggregate([
  //       {
  //         $lookup: {
  //           from: 'tasks',
  //           localField: '_id',
  //           foreignField: 'userId',
  //           as: 'tasks'
  //         }
  //       }/*,
  //       {
  //         $addFields: {
  //           numTasks: { $size: '$tasks' }
  //         }
  //       }/*,
  //       {
  //         $sort: {
  //           numTasks: -1
  //         }
  //       },
  //       {
  //         $limit: 100
  //       },
  //       {
  //         $project: {
  //           _id: 1,
  //           name: 1,
  //           numTasks: 1
  //         }
  //       } */
  //     ]).exec()

  //   if (result.length > 1) {
  //     throw new Error('Internal error')
  //   }
  //   return (result.length === 1)
  //     ? result[0] as User
  //     : null
  // }

  async demonstrateTransactionBlock (): Promise<UserDato[]> {
    await this.model.db
      .transaction(async (session) => {
        await this.model.create(
          [
            {
              name: 'user140',
              tenantId: '640cdbd78e8edb268cc8f0a9',
              gender: Gender.male,
              age: 32
            }
          ],
          { session }
        )
        await this.model.create(
          [
            {
              name: 'user141',
              tenantId: '640cdbd78e8edb268cc8f0a9',
              gender: Gender.female,
              age: 43
            }
          ],
          { session }
        )
        throw new Error('Oops!')
      })
      .catch((err) => {
        throw new Error(err)
      })

    return await this.model.find().exec()
  }

  async demonstrateTransactionFlow (): Promise<UserDato[]> {
    const session = await this.model.db.startSession()
    session.startTransaction()

    try {
      await this.model.create(
        [
          {
            name: 'user136',
            tenantId: '640cdbd78e8edb268cc8f0a9',
            gender: Gender.male,
            age: 32
          }
        ],
        { session }
      )
      await this.model.create(
        [
          {
            name: 'user137',
            tenantId: '640cdbd78e8edb268cc8f0a9',
            gender: Gender.female,
            age: 43
          }
        ],
        { session }
      )
      throw new Error('Oops!')
      // eslint-disable-next-line no-unreachable
      await session.commitTransaction()
    } catch (err) {
      await session.abortTransaction()
      throw new Error(err)
    }

    // eslint-disable-next-line no-unreachable
    return await this.model.find().exec()
  }

  async demonstrateTransactionLock (): Promise<UserDato[]> {
    const promises: Array<Promise<void>> = []
    for (let i = 0; i < 5; i++) {
      const currPromise = this.model.db.transaction(
        async (session) => {
          console.log(`Transaction #${i} started`)
          const length1 = (await this.model.find({ session }).exec()).length
          console.log(`Transaction #${i}, length: ${length1}`)
          await this.model.create(
            [
              {
                name: `user'${i}`,
                tenantId: '640cdbd78e8edb268cc8f0a9',
                gender: Gender.female,
                age: 43
              }
            ],
            { session }
          )
          console.log(`Transaction #${i}, creation done`)
          await sleep(10000)
          const length2 = (await this.model.find({ session }).exec()).length
          console.log(`Transaction #${i} ended, length: ${length2}`)
        },
        {
          readConcern: 'majority',
          readPreference: 'primary',
          writeConcern: { w: 'majority' }
        }
      ) // Transaction options sample, they allow us to define required balance between 'consistency' and 'performance'.
      promises.push(currPromise)
    }
    await Promise.all(promises)
    const length3 = (await this.model.find().exec()).length
    console.log(`All transactions ended, length: ${length3}`)
    return await this.model.find().exec()
  }
}
