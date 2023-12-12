"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dato = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const nestjs_query_graphql_1 = require("@ptc-org/nestjs-query-graphql");
const graphql_1 = require("@nestjs/graphql");
function Dato(options) {
    return (target) => {
        if (options.outputOnly === true && options.collection !== undefined) {
            throw new Error(`Option 'outputOnly' cannot be defined together with option 'collection', at '@Dato()' decorator, above class '${target.constructor.name}'`);
        }
        if (options.outputOnly !== true) {
            if (options.collection !== undefined) {
                (0, typegoose_1.ModelOptions)({
                    schemaOptions: { timestamps: true, collection: options.collection }
                })(target);
            }
        }
        if (options.outputOnly !== true) {
            (0, nestjs_query_graphql_1.QueryOptions)({ pagingStrategy: nestjs_query_graphql_1.PagingStrategies.OFFSET })(target);
            if (options.collection !== undefined) {
                (0, nestjs_query_graphql_1.KeySet)(['id'])(target);
                (0, graphql_1.InputType)(options.name + 'NonEmbeddedInput')(target);
            }
            else {
                (0, graphql_1.InputType)(options.name + 'EmbeddedInput')(target);
            }
            const relationsMetadata = Reflect.getMetadata('relationsMetadata', target);
            relationsMetadata?.forEach(currRelationsMetadata => {
                switch (currRelationsMetadata.relationType) {
                    case 'manyToOne':
                        (0, nestjs_query_graphql_1.FilterableRelation)(currRelationsMetadata.propName, currRelationsMetadata.type)(target);
                        break;
                    case 'oneToOne':
                        (0, nestjs_query_graphql_1.FilterableRelation)(currRelationsMetadata.propName, currRelationsMetadata.type, { nullable: currRelationsMetadata.nullableOneToOneRelation })(target);
                        break;
                    case 'oneToMany':
                        (0, nestjs_query_graphql_1.FilterableOffsetConnection)(currRelationsMetadata.propName, currRelationsMetadata.type)(target);
                        break;
                    default:
                        throw new Error('Invalid relation type');
                }
            });
        }
        (0, graphql_1.ObjectType)(options.name)(target);
    };
}
exports.Dato = Dato;
//# sourceMappingURL=dato.js.map