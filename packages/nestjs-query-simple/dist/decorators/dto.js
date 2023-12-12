"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDto = exports.InputDto = void 0;
const graphql_1 = require("@nestjs/graphql");
function InputDto(name) {
    return (target) => {
        (0, graphql_1.InputType)(name + 'Input')(target);
    };
}
exports.InputDto = InputDto;
function UpdateDto(name) {
    return (target) => {
        (0, graphql_1.InputType)(name + 'Update')(target);
    };
}
exports.UpdateDto = UpdateDto;
//# sourceMappingURL=dto.js.map