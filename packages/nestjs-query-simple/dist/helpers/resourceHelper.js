"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceHelper = void 0;
const nestjs_query_graphql_1 = require("@ptc-org/nestjs-query-graphql");
const nestjs_query_typegoose_1 = require("@ptc-org/nestjs-query-typegoose");
class ResourceHelper {
    static forFeature(opts) {
        return nestjs_query_graphql_1.NestjsQueryGraphQLModule.forFeature({
            imports: [nestjs_query_typegoose_1.NestjsQueryTypegooseModule.forFeature(opts.datos)],
            dtos: opts.datos.map(currTypegooseClass => {
                return {
                    DTOClass: currTypegooseClass
                };
            })
        });
    }
}
exports.ResourceHelper = ResourceHelper;
//# sourceMappingURL=resourceHelper.js.map