import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap (): Promise<void> {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}
void bootstrap()

/*
Note: This code enables error analyssis via 'https://devtools.nestjs.com'.

const fs = require('fs');

async function bootstrap (): Promise<void> {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
    abortOnError: false
  })
  await app.listen(3000)
}

bootstrap().catch(() => {
  fs.writeFileSync('graph.json', PartialGraphHost.toString() ?? '')
  process.exit(1)
})
*/
