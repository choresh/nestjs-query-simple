"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtoProp = void 0;
const graphql_1 = require("@nestjs/graphql");
function DtoProp(options = {}) {
    return function (target, key) {
        const reflectedType = Reflect.getMetadata('design:type', target, key);
        if (!reflectedType) {
            throw new Error(`Failed to get property metadata, at '@DtoProp()' decorator, class name: '${target.constructor.name}', property name: '${key}'`);
        }
        const typeFunc = options.type;
        const graphQlTypeFunc = typeFunc !== undefined
            ? reflectedType.name === 'Array'
                ? () => [typeFunc()]
                : typeFunc
            : () => reflectedType;
        (0, graphql_1.Field)(graphQlTypeFunc, { nullable: options.nullable })(target, key);
    };
}
exports.DtoProp = DtoProp;
//# sourceMappingURL=dtoProp.js.map