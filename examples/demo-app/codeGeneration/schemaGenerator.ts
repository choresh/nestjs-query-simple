/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-var-requires */

import { GraphQLSchemaBuilderModule, GraphQLSchemaFactory } from '@nestjs/graphql'
import { printSchema } from 'graphql'
import { NestFactory } from '@nestjs/core'
import { writeFile } from 'node:fs/promises'
import * as ts from 'typescript'
import * as fs from 'fs'
import * as path from 'path'

const SRC_DIR_PATH = "./src";
const TAR_FILE_PATH = "./codeGeneration/generatedSchema.gql";

class SchemaGenerator {
  public static async generate (): Promise<void> {
    const resolverClasses = this._findDecoratedClasses(SRC_DIR_PATH)
    const app = await NestFactory.create(GraphQLSchemaBuilderModule)
    await app.init()
    const gqlSchemaFactory = app.get(GraphQLSchemaFactory)
    const schema = await gqlSchemaFactory.create(resolverClasses)
    await writeFile(TAR_FILE_PATH, printSchema(schema))
  }

  // Function to traverse source files and extract classes with '@Resolver()' decorator.
  private static _findDecoratedClasses (srcDirPath: string): Function[] {
    const sourceFileNames = this._getFilesRecursively(srcDirPath)
    const classes: Function[] = []
    sourceFileNames.forEach(currSourceFileName => {
      const currSourceFileInfo = ts.createSourceFile(
        currSourceFileName,
        fs.readFileSync(currSourceFileName).toString(),
        ts.ScriptTarget.ESNext,
        true
      )
      this._findResolverClasses(srcDirPath, currSourceFileInfo, classes)
    })
    return classes
  }

  // Function to find classes decorated with '@Resolver()'.
  private static _findResolverClasses (srcDirPath: string, node: ts.Node, resolverClasses: Function[]): void {
    const decorators = ts.canHaveDecorators(node) ? ts.getDecorators(node) : undefined
    if (
      ts.isClassDeclaration(node) &&
            (decorators !== undefined) &&
            decorators.some(
              decorator =>
                ts.isCallExpression(decorator.expression) &&
                    ts.isIdentifier(decorator.expression.expression) &&
                    decorator.expression.expression.text === 'Resolver'
            )
    ) {
      const resolverFilePath = path.join('..', (node.parent as any).fileName.replace(".ts", ""));
      const resolverClass = Object.values(require(resolverFilePath))[0] as Function
      resolverClasses.push(resolverClass)
    }
    ts.forEachChild(node, currNode => { this._findResolverClasses(srcDirPath, currNode, resolverClasses) }) // Recursion!
  }

  private static _getFilesRecursively (dir: string): string[] {
    const files: string[] = []
    fs.readdirSync(dir).forEach(file => {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)
      if (stat.isDirectory()) {
        files.push(...this._getFilesRecursively(filePath)) // Recursion!
      } else if (filePath.endsWith('.ts')) {
        files.push(filePath)
      }
    })
    return files
  }
}

void SchemaGenerator.generate()
