# nestjs-query-simple

## Description
A thin layer built on top of 'NestJS-Query', enables easy definition of MongoDB/GraphQL Entities and DTOs within NestJS apps.

## Key Advantages of this Package
* Provides powerful decorators for entities/DTOs, abstracting away complexities:
    *  Eliminates the need for multiple decorators while defining MongoDB/GraphQL metadata. With a single class and a solitary decorator per property, all commonly required aspects are addressed (we call this kind of class DATO - `D`ata `A`ccess and `T`ransfer `O`bject).
    * Simplifies entity relationship definitions (one-to-one, one-to-many, many-to-one) through a singular decorator.
    * Streamlines the definition of many other MongoDB/GraphQL data aspects.
    * Utilizes just four easily comprehensible decorators: `@Dato()`, `@DatoProp()`, `@Dto()`, `@DtoProp()`.
* Offers valuable helpers and base classes to streamline the creation of common NestJS components like modules and services.

## Technological stack: 
This package heavily relies on [NestJS-Query](https://tripss.github.io/nestjs-query/), yet it presents its core capabilities in a more focused and simplified manner.

## Sample application
See [demo-app](https://github.com/choresh/nestjs-query-simple/blob/main/examples/demo-app/README.md).

## Code samples (DATOs/DTOs):
* Classes:
    - DATO (each single decorator in it hide fiew lower level GraphQL/MongoDb decorators): TBD
    - DTO (cary input/update parameters): TBD
    - Embeded (i.e. not refernced) : TBD
    - Virtual (calculated): TBD
* Properties:
    - Passing types (enum, class...) to decorator: TBD
    - One-to-one relation: TBD
    - One-to-many relation: TBD
    - Many-to-one relation: TBD

## Code samples (modules and services):
* Resource service: TBD
* Resource module: TBD
* App module: TBD

