"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppHelper = void 0;
const nestjs_typegoose_1 = require("@m8a/nestjs-typegoose");
const mongoose_1 = require("mongoose");
function setLogger(logger) {
    (0, mongoose_1.set)('debug', (collection, method, query, doc) => {
        logger.info('Mongoose log message:', JSON.stringify({ collection, method, query, doc }, null, 4));
    });
}
class AppHelper {
    static forRoot(uri, logger) {
        if (logger !== undefined) {
            setLogger(logger);
        }
        return nestjs_typegoose_1.TypegooseModule.forRoot(uri);
    }
    static forRootAsync(options) {
        if (options.logger !== undefined) {
            setLogger(options.logger);
        }
        return nestjs_typegoose_1.TypegooseModule.forRootAsync(options.typegooseOptions);
    }
}
exports.AppHelper = AppHelper;
//# sourceMappingURL=appHelper.js.map