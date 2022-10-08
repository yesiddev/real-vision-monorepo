"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySchemaMongo = void 0;
const mongoose_1 = require("mongoose");
exports.CategorySchemaMongo = new mongoose_1.Schema({
    uuid: { type: String, required: true },
    name: { type: String, required: true },
    icon: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true
});
//# sourceMappingURL=CategorySchemaMongo.js.map