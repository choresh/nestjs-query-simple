"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceBase = void 0;
const nestjs_query_typegoose_1 = require("@ptc-org/nestjs-query-typegoose");
class ServiceBase extends nestjs_query_typegoose_1.TypegooseQueryService {
    constructor(model) {
        super(model);
        this.model = model;
    }
}
exports.ServiceBase = ServiceBase;
//# sourceMappingURL=serviceBase.js.map