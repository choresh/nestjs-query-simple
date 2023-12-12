
import { GraphQLSchemaBuilderModule, GraphQLSchemaFactory } from '@nestjs/graphql';
import { printSchema } from 'graphql';
import { NestFactory } from '@nestjs/core';
import { writeFile } from 'node:fs/promises';
import { SprintsResolver } from './sprints/sprints.resolver';
import { TenantsResolver } from './tenants/tenants.resolver';
import { TasksResolver } from './tasks/tasks.resolver';
import { TaskSprintJunctionsResolver } from './taskSprintJunctions/taskSprintJunctions.resolver';
import { TenantBillingsResolver } from './tenantBillings/tenantBillings.resolver';
import { UsersResolver } from './users/users.resolver';

async function generateSchema() {
    const app = await NestFactory.create(GraphQLSchemaBuilderModule)
    await app.init()
    const gqlSchemaFactory = app.get(GraphQLSchemaFactory)
    const schema = await gqlSchemaFactory.create([
        TenantsResolver,
        SprintsResolver,
        TasksResolver,
        TaskSprintJunctionsResolver,
        TenantBillingsResolver,
        TenantsResolver,
        UsersResolver
    ])
    await writeFile('./generatedSchema.gql', printSchema(schema))
}
generateSchema()