# demo-app

## Description
Sample application, demostrate usage of npm pakage [nestjs-query-simple](https://www.npmjs.com/package/nestjs-query-simple).

## Prerequisites
* [MongoDB](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/).
* [Compass](https://www.mongodb.com/products/compass) (recommended).

## Install the app
Run this command within the app root folder:
``` bash
$ npm install
```

## Build the app
Run this command within the app rootfolder:
``` bash
$ npm run build
```

## Running the app
Run those commands within the app rootfolder:
``` bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Using the app
Open browser, and navigate to the folowing URLs:
* Main page: http://localhost:3000.
* Graphql playground: http://localhost:3000/graphql.

## Test
Run those commands within the app rootfolder:
```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## NestJs docs, code and samples
* [NestJs docs](https://docs.nestjs.com).
* [NestJs code and samples](https://github.com/nestjs/nest).

## Nestjs-query docs, code and samples
* [Getting started](https://tripss.github.io/nestjs-query/docs/introduction/getting-started).
* List of automatic created `mutations` (for each entity):
  - createMany
  - createOne
  - updateMany
  - updateOne
  - deleteMany
  - deleteOne
* List of automatic created `queries` (for each entity):
  - getOne (singular form of the resource name, e.g. 'tenant')
  - getMany (plural form of the resource name, e.g. 'tenants')

## How to scaffold a new project
1. Run this command within the project parent folder:
    ``` bash
    $ nest new <your-project-name>
    ```
2. At file 'tsconfig.json', at 'compilerOptions' object, set `"strictNullChecks": true`.
3. Fix syntax errors accurding result of the linter.
4. Another way: invoke the linter - run this command within the app root folder:
    ``` bash
    $ npm run prettier:write
    ```
5. At app rootfolder, add file '.gitignore', with this content:
    ``` bash
    # Dependency directory
    node_modules

    # Ignore built ts files
    dist/**/*

    # Coverage reports
    coverage
    ```

## How to scaffold a new resource
1. Run this command within the app rootfolder:
    ``` bash
    $ npx nest g resource
    ```
2. The CLI will prompt you with a few questions, in order to create the desiared DATOs (Entities), DTOs, Module, Resolver, Service, and Tests.
* Standard answers:
  - When CLI ask `What transport layer do you use` - you should usally select option `GraphQL (code first)`.
  - When CLI ask `Would you like to generate CRUD entry points?` - you should usally select option `n`.
3. Create the relevant entity/dto at our `entities` library:
* Create new root folder (under the `entities` library 'src' folder), its name should be the `singular form` of the new resource.
* Under it - create `dtos` and `entities` folders.
* Define new entity/dto classes (take sample from exists classes), main principals:
  - `The entity` conatains all fields we want to store in DB.
  - `The main dto` (i.e. not the input/output dto) contains all the field which we want to expose in resuls of from standard CRUD operations (i.e. GraphQL mutation/query), usally it will have the same structure as the entity.
  - `The input dto` contains all the field which we want to set in creation of new object (usally - all of them will be mandatories).
  - `The update dto` contains all the field which we want to set in updating of exists object (usally - all of them will be optionals).
  - Fields at `main dto` and at `entity` - will be markes as `mandatory/optional` accurding the `input dto` (filds will be marked as mandatory if they appear as mandatory at the input dto).
* Add 'index.ts' file within each folder, include your new root folder (take sample from exists index files, be aware that the one in root folder is a bit diffrent).
4. Fix your new `service`:
* Replace entire content of your new `service` file with this content:
    ```
    import { ServiceBase } from "nestjs-query-simple";
    import { <type of the resource dto class>, <type of the resource entity class> } from "<your entities/dtos location>";
    import {
    QueryService,
    } from "@ptc-org/nestjs-query-core";
    import { ReturnModelType } from "@typegoose/typegoose";
    import { InjectModel } from "@m8a/nestjs-typegoose";

    @QueryService(<type of the resource dto class>)
    export class <original name of the service class> extends ServiceBase<<type of the resource dto class>> {
      private readonly logger = new Logger(this);

      constructor(
        @InjectModel(<type of the resource entity class>)
        model: ReturnModelType<typeof <type of the resource dto class>>,
      ) {
        super(model);
      }
    }
    ```
* Use the IDE's commands in order to implement the required inherited methods.
* Fix the generated methods:
  - Delete the 'throw' statements.
  - Add 'async' indication before the metod names.
  - Move the methods under the constructor,
  - Wrap the methods with region start/end statements (the start should seen like `// #region DB Event Handlers`).
5. Fix your new `resolver`:
* Replace entire content of your new `resolver` file with this content:
    ```
    import { Resolver } from "@nestjs/graphql";
    import { <type of your service class> } from "<path of your service file>";
    import { <type of the resource dto class>, <type of the resource input dto class>, <type of the resource update dto class> } from "<your entities/dtos location>";
    import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";

    @Resolver(() => <type of the resource dto class>)
    export class <original name of the resolver class> extends CRUDResolver(<type of the resource dto class>, {
      CreateDTOClass: <type of the resource input dto class>,
      UpdateDTOClass: <type of the resource update dto class>,
    }) {
      constructor(readonly _service: <type of your service class>) {
        super(_service);
      }
    }
    ```
6. Fix your new `module`:
* Replace entire content of your new `module` file with this content:
    ```
    import { Module } from "@nestjs/common";
    import { <type of your service class> } from "<path of your service file>";
    import { <type of your resolver class> } from "<path of your resolver file>";
    import { ResourceHelper } from "nestjs-query-simple";
    import { <type of the resource dto class>, <type of the resource entity class> } from "<your entities/dtos location>";

    @Module({
      imports: [
        ResourceHelper.forFeature({
          dtos: [{ DTOClass: <type of the resource dto class> }],
          entities: [<type of the resource entity class>],
        }),
      ],
      providers: [<type of your resolver class>, <type of your service class>],
    })
    export class <original name of the module class> {}

    ```
4. Fix syntax errors accurding result of the linter.
5. Another way: invoke the linter - run this command within the app root folder:
    ``` bash
    $ npm run prettier:write
    ```

## How to continue development of new resource
1. Add properties and decortators to entity(ies) and DTOs of your new resource (see samples at other resources).
2. Add missing endpoints at 'Resolver' of your new resource (if any).
2. Validate that your new resource exposed correctly at Graphql playground (http://localhost:3000/graphql).
3. Add/fix tests for your new resource:
    * At resource's folder:
      * Add entries at `<name of your new resource>.resolver.spec.ts`.
      * Add entries at `<name of your new resource>.service.spec.ts`.
    * At project's 'test' folder - add e2e test:
      * Copy and modify content of exists e2e-spec.ts. The final results should be new e2e test file (`<name of your new resource>.e2e-spec.ts`).
      * Copy and modify content relevant helper.
      * Fix/test the new testing code.

## Manage MongoDb migrations
Run command in this structure within the app rootfolder:
```
$ npm run migrate [command] [options]
```
Usage:
``` bash
$ npm run migrate [[create|up|down<migration-name>]|list|prune] [optional options]
```
Commands:
```
  list                     Lists all migrations and their current state.
  create <migration-name>  Creates a new migration file.
  up [migration-name]      Migrates all the migration files that have not yet
                           been run in chronological order. Not including
                           [migration-name] will run UP on all migrations that
                           are in a DOWN state.
  down <migration-name>    Rolls back all migrations down to given name (if down
                           function was provided)
  prune                    Allows you to delete extraneous migrations by
                           removing extraneous local migration files/database
                           migrations.
```

Options:
```
  --autosync              Automatically add any migrations on filesystem but not in db to db
                          rather than asking interactively (use in scripts)
  -h, --help              Show help
```

More details about migration infra see here: [migrate-mongoose](https://www.npmjs.com/package/migrate-mongoose?activeTab=readme).

Sample of (modified) migration file (in this sample - change property name from 'department' to 'division' at 'up' migration, and reverse it at 'down' migration):
``` javascript
const mongoose = require('mongoose')
const typegoose = require('@typegoose/typegoose')
const userDato = require('./../dist/users/entities/user.entity')
const userModel = typegoose.getModelForClass(userDato.User)

async function up () {
  await mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'test' })
  await userModel.updateMany({}, {
    $rename: { department: 'division' }
  }, {
    multi: true,
    strict: false // The 'strict: false' allows to update keys that currently not exist in the entity class.
  })
}

async function down () {
  await mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'test' })
  await userModel.updateMany({}, {
    $rename: { division: 'department' }
  }, {
    multi: true,
    strict: false // The 'strict: false' allows to update keys that currently not exist in the entity class.
  })
}

module.exports = { up, down }
```

## How to fix your local MongoDb installation (cvonvert a Standalone to a Replica Set), optional, required only for tests with locks
* Run those commands to kill the MongoDB process:
  ```
  % pgrep mongo
  % kill <MongoDb Process ID>
  ```
* Run this command within the app rootfolder, to start MongoDb with the required configuration (do it in dedicated terminal, any close of the terminal will delete the DB data):
  ```
  run-rs npm module
  ```
* More info see [Convert a Standalone to a Replica Set](https://www.mongodb.com/docs/manual/tutorial/convert-standalone-to-replica-set).
