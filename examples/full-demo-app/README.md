# full-demo-app

## Description
Full example application, demostrate usage of npm pakage [nestjs-query-simple](https://www.npmjs.com/package/nestjs-query-simple).

## Docs
https://nestjs-query-simple-website.vercel.app

## Prerequisites
* [MongoDB](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/).
* [Compass](https://www.mongodb.com/products/compass) (recommended).

## Install the app
Run this command within the app root folder:
``` bash
npm install
```

## Build the app
Run this command within the app's root folder:
``` bash
npm run build
```

## Running the app
Run those commands within the app's root folder:
``` bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Using the app
Open browser, and navigate to the folowing URLs:
* Main page: http://localhost:3000.
* Graphql playground: http://localhost:3000/graphql.

## Test
Run those commands within the app's root folder:
```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```