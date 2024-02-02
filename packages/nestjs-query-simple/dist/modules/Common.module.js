"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CommonModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const __1 = require("..");
let CommonModule = CommonModule_1 = class CommonModule {
    static forRoot(uri, logger) {
        return {
            module: CommonModule_1,
            imports: [
                __1.AppHelper.forRoot(uri, logger),
                graphql_1.GraphQLModule.forRoot({
                    driver: apollo_1.ApolloDriver,
                    autoSchemaFile: true
                })
            ]
        };
    }
    static forRootAsync(options) {
        return {
            module: CommonModule_1,
            imports: [
                __1.AppHelper.forRootAsync(options),
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
exports.CommonModule = CommonModule;
exports.CommonModule = CommonModule = CommonModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [],
        providers: []
    })
], CommonModule);
//# sourceMappingURL=Common.module.js.map