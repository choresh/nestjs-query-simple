"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dto = void 0;
const graphql_1 = require("@nestjs/graphql");
function Dto(name, type) {
    let suffix;
    switch (type) {
        case 'input':
            suffix = 'Input';
            break;
        case 'update':
            suffix = 'Update';
            break;
        default:
            throw new Error('Invalid dto type');
    }
    return (target) => {
        (0, graphql_1.InputType)(name + suffix)(target);
    };
}
exports.Dto = Dto;
//# sourceMappingURL=dto.js.map