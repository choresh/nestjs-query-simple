"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatoProp = void 0;
const graphql_1 = require("@nestjs/graphql");
const nestjs_query_graphql_1 = require("@ptc-org/nestjs-query-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const PRIMARY_KEYS_NAME = '_id';
const PRIMARY_KEYS_TYPE = graphql_1.ID;
function DatoProp(options = {}) {
    return function (target, key) {
        const reflectedType = Reflect.getMetadata('design:type', target, key);
        const isArray = reflectedType && reflectedType.name === 'Array';
        if ((options.manyToOne !== undefined ||
            options.oneToOne !== undefined ||
            options.oneToMany !== undefined ||
            options.type !== undefined) &&
            options.primaryKey === true) {
            throw new Error(`Option 'primaryKey' cannot be defined together with options 'manyToOne'/oneToOne'/'oneToMany'/'type', at '@DatoProp()' decorator, above property '${target.constructor.name}.${key}'`);
        }
        if ((options.manyToOne !== undefined || options.oneToOne !== undefined || options.oneToMany !== undefined) &&
            options.type !== undefined) {
            throw new Error(`Option 'type' cannot be defined together with options 'manyToOne'/'oneToOne'/'oneToMany', at '@DatoProp()' decorator, above property '${target.constructor.name}.${key}'`);
        }
        if ([(options.oneToMany !== undefined), (options.manyToOne !== undefined), (options.oneToOne !== undefined)].filter(Boolean).length > 1) {
            throw new Error(`Options 'oneToMany'/'manyToOne'/'oneToOne' cannot be defined together, at '@DatoProp()' decorator, above property '${target.constructor.name}.${key}'`);
        }
        if (options.type !== undefined && options.primaryKey === true) {
            throw new Error(`Option 'primaryKey' cannot be defined together with option 'type', at '@DatoProp()' decorator, above property '${target.constructor.name}.${key}'`);
        }
        const typeFunc = options.manyToOne?.refType ?? options.oneToOne?.refType ?? options.oneToMany?.refType ?? options.type;
        if (options.primaryKey !== true &&
            (options.propScope === undefined || options.propScope === 'internal')) {
            const typegooseOptions = {
                required: options.nullable !== true
            };
            if (options.oneToMany !== undefined || options.manyToOne !== undefined || options.oneToOne !== undefined) {
                if (typeFunc === undefined) {
                    throw new Error(`Option 'refType' is required, at '@DatoProp()' decorator, above property '${target.constructor.name}.${key}'`);
                }
                if (options.oneToMany !== undefined) {
                    typegooseOptions.foreignField = options.oneToMany.foreignField;
                    typegooseOptions.localField = PRIMARY_KEYS_NAME;
                }
                else if (options.manyToOne !== undefined || options.oneToOne !== undefined) {
                    typegooseOptions.foreignField = PRIMARY_KEYS_NAME;
                    typegooseOptions.justOne = true;
                    typegooseOptions.localField = options.manyToOne?.localField ?? options.oneToOne?.localField;
                }
                typegooseOptions.ref = typeFunc;
                typegooseOptions.type = reflectedType ?? typeFunc;
            }
            else if (isArray) {
                if (options.type === undefined) {
                    throw new Error(`Option 'type' is required, at '@DatoProp()' decorator, above property '${target.constructor.name}.${key}'`);
                }
                typegooseOptions.type = options.type;
            }
            if (!typegooseOptions.type && !reflectedType) {
                typegooseOptions.type = typeFunc;
            }
            (0, typegoose_1.Prop)(typegooseOptions)(target, key);
        }
        if (options.propScope === undefined || options.propScope === 'external') {
            const graphQlTypeFunc = typeFunc !== undefined
                ? isArray
                    ? () => [typeFunc()]
                    : typeFunc
                : options.primaryKey === true
                    ? () => PRIMARY_KEYS_TYPE
                    : () => reflectedType;
            if (options.primaryKey === true) {
                (0, nestjs_query_graphql_1.IDField)(graphQlTypeFunc)(target, key);
            }
            else {
                if (options.nullable !== undefined || isArray) {
                    (0, graphql_1.Field)(graphQlTypeFunc, { nullable: true })(target, key);
                }
                else {
                    (0, nestjs_query_graphql_1.FilterableField)(graphQlTypeFunc)(target, key);
                }
                let relationType;
                if (options.oneToMany !== undefined) {
                    relationType = 'oneToMany';
                }
                else if (options.manyToOne !== undefined) {
                    relationType = 'manyToOne';
                }
                else if (options.oneToOne !== undefined) {
                    relationType = 'oneToOne';
                }
                if (relationType) {
                    if (!Reflect.hasMetadata('relationsMetadata', target.constructor)) {
                        Reflect.defineMetadata('relationsMetadata', [], target.constructor);
                    }
                    const type = () => {
                        if (!typeFunc) {
                            throw new Error('Type func not defined');
                        }
                        const type = typeFunc();
                        if (!type) {
                            throw new Error('Type not defined');
                        }
                        return type;
                    };
                    const relationsMetadata = Reflect.getMetadata('relationsMetadata', target.constructor);
                    relationsMetadata.push({
                        type,
                        propName: key,
                        relationType,
                        nullableOneToOneRelation: (options.oneToOne !== undefined) && options.nullable
                    });
                }
            }
        }
    };
}
exports.DatoProp = DatoProp;
//# sourceMappingURL=datoProp.js.map