const gqlg = require('gql-generator');

const SRC_FILE_PATH = "./codeGeneration/generatedSchema.graphql";
const TAR_DIR_PATH = "./codeGeneration/generatedOperations";

gqlg({ schemaFilePath: SRC_FILE_PATH, destDirPath: TAR_DIR_PATH, depthLimit: 5, fileExtension: "graphql" });