
import { GraphQLSchemaBuilderModule, GraphQLSchemaFactory } from '@nestjs/graphql';
import { printSchema } from 'graphql';
import { NestFactory } from '@nestjs/core';
import { TenantsResolver } from './tenants/tenants.resolver';
import { writeFile } from 'node:fs/promises';

async function generateSchema() {
    const app = await NestFactory.create(GraphQLSchemaBuilderModule)
    await app.init()
    const gqlSchemaFactory = app.get(GraphQLSchemaFactory)
    const schema = await gqlSchemaFactory.create([TenantsResolver])
    await writeFile('./generatedSchema.gql', printSchema(schema))
}
generateSchema()