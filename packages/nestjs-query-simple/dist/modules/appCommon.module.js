"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AppCommonModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppCommonModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const nestjs_typegoose_1 = require("@m8a/nestjs-typegoose");
const mongoose_1 = require("mongoose");
function setLogger(logger) {
    (0, mongoose_1.set)('debug', (collection, method, query, doc) => {
        logger.info('Mongoose log message:', JSON.stringify({ collection, method, query, doc }, null, 4));
    });
}
let AppCommonModule = AppCommonModule_1 = class AppCommonModule {
    static forRoot(uri, logger) {
        if (logger !== undefined) {
            setLogger(logger);
        }
        return {
            module: AppCommonModule_1,
            imports: [
                nestjs_typegoose_1.TypegooseModule.forRoot(uri),
                graphql_1.GraphQLModule.forRoot({
                    driver: apollo_1.ApolloDriver,
                    autoSchemaFile: true
                })
            ]
        };
    }
    static forRootAsync(options) {
        if (options.logger !== undefined) {
            setLogger(options.logger);
        }
        return {
            module: AppCommonModule_1,
            imports: [
                nestjs_typegoose_1.TypegooseModule.forRootAsync(options.typegooseOptions),
                graphql_1.GraphQLModule.forRootAsync({
                    driver: apollo_1.ApolloDriver,
                    useFactory: () => {
                        return {
                            autoSchemaFile: true
                        };
                    }
                })
            ]
        };
    }
};
exports.AppCommonModule = AppCommonModule;
exports.AppCommonModule = AppCommonModule = AppCommonModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [],
        providers: []
    })
], AppCommonModule);
//# sourceMappingURL=appCommon.module.js.map