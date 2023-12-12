"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentifiableDato = void 0;
const datoProp_1 = require("../decorators/datoProp");
const mongoose_1 = require("mongoose");
const nestjs_query_graphql_1 = require("@ptc-org/nestjs-query-graphql");
const graphql_1 = require("@nestjs/graphql");
let IdentifiableDato = class IdentifiableDato {
};
__decorate([
    (0, datoProp_1.DatoProp)({ primaryKey: true, propScope: 'internal' }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], IdentifiableDato.prototype, "_id", void 0);
__decorate([
    (0, datoProp_1.DatoProp)({ primaryKey: true, propScope: 'external' }),
    __metadata("design:type", String)
], IdentifiableDato.prototype, "id", void 0);
IdentifiableDato = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, nestjs_query_graphql_1.KeySet)(['id'])
], IdentifiableDato);
exports.IdentifiableDato = IdentifiableDato;
//# sourceMappingURL=identifiableDato.js.map