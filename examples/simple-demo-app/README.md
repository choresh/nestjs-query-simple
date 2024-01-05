# simple-demo-app

## Description
Simple example application, demostrate usage of npm pakage [nestjs-query-simple](https://www.npmjs.com/package/nestjs-query-simple).

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
Open browser, and navigate to: http://localhost:3000/graphql.

## GraphQL mutations/queries examples

Some mutations and queries examples you can use in this app's GraphQL playground (http://localhost:3000/graphql):

Create a single example item:
```graphql
mutation CreateSingleExampleItem {
  createOneExampleItem(input: {
    exampleItem: {
      exampleProperty1: "val-a"
    }
  }) {
    id
    exampleProperty1
    exampleProperty2
  }
}
```

Update a single example item:
```graphql
mutation UpdateSingleExampleItem {
  updateOneExampleItem(input: {
    id: "YOUR_ID_HERE"
    update: {
      exampleProperty1: "val-b",
      exampleProperty2: "val-c"
    }
  }) {
    id
    exampleProperty1
    exampleProperty2
  }
}
```

Delete a single example item:
```graphql
mutation DeleteSingleExampleItem {
  deleteOneExampleItem(input: {
    id: "YOUR_ID_HERE"
  }) {
    id
    exampleProperty1
    exampleProperty2
  }
}
```

Create multiple example items:
```graphql
mutation CreateManyExampleItems {
  createManyExampleItems(input: {
    exampleItems: [
      {
        exampleProperty1: "val-d"
      },
      {
        exampleProperty1: "val-e"
      },
      {
        exampleProperty1: "val-f"
      }
    ]
  }) {
    id
    exampleProperty1
    exampleProperty2
  }
}
```

Update multiple example items:
```graphql
mutation UpdateManyExampleItems {
  updateManyExampleItems(input: {
    filter: {
      exampleProperty1: { eq: "OldValue" }
    },
    update: {
      exampleProperty1: "NewValue"
    }
  }) {
    updatedCount
  }
}
```

Delete multiple example items based on a filter:
```graphql
mutation DeleteManyExampleItems {
  deleteManyExampleItems(input: {
    filter: {
      exampleProperty1: { eq: "ValueToFilter" }
    }
  }) {
    deletedCount
  }
}
```

Get a single example item by ID:
```graphql
query GetSingleExampleItem {
  exampleItem(id: "YOUR_ID_HERE") {
    id
    exampleProperty1
    exampleProperty2
  }
}
```

Get a paginated list of example items with default paging settings:
```graphql
query GetExampleItems {
  exampleItems {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      id
      exampleProperty1
      exampleProperty2
    }
  }
}
```

Get a paginated list of example items with specific filter, sorting, and paging settings
```graphql
query GetFilteredAndSortedExampleItems {
  exampleItems(
    paging: { limit: 10, offset: 0 } # Adjust limit and offset as needed
    filter: {
      exampleProperty1: { neq: "SomeValue" } # Adjust filter criteria
    }
    sorting: [
      { field: exampleProperty1, direction: ASC } # Adjust sorting field and direction
    ]
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      id
      exampleProperty1
      exampleProperty2
    }
  }
}
```