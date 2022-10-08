"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandSchemaMongo = void 0;
const mongoose_1 = require("mongoose");
exports.BrandSchemaMongo = new mongoose_1.Schema({
    uuid: { type: String, required: true },
    name: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true
});
//# sourceMappingURL=brand-mongo.js.map