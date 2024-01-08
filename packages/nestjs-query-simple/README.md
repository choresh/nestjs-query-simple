# nestjs-query-simple

## Description
* A thin layer built on top of [Nestjs-query](https://tripss.github.io/nestjs-query/), enables easy definition of MongoDB/GraphQL aspects within NestJS apps.

## Key Advantages of this Package
* Provides powerful decorators for Entities/DTOs, abstracting away complexities:
    *  Eliminates the need for multiple decorators while defining MongoDB/GraphQL metadata. With a single class and a solitary decorator per property, all commonly required aspects are addressed (we call this kind of class DATO - `D`ata `A`ccess and `T`ransfer `O`bject).
    * Simplifies entity relationship definitions (one-to-one, one-to-many, many-to-one) through a singular decorator.
    * Streamlines the definition of many other MongoDB/GraphQL data aspects.
    * Utilizes just four easily comprehensible decorators: `@Dato()`, `@DatoProp()`, `@Dto()`, `@DtoProp()`.
* Offers valuable helpers and base classes to streamline the creation of common NestJS components like modules and services.

## Docs
See [Nestjs-query-simple website](https://nestjs-query-simple-website.vercel.app/).