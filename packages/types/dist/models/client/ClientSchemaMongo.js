"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSchemaMongo = void 0;
const mongoose_1 = require("mongoose");
exports.ClientSchemaMongo = new mongoose_1.Schema({
    uuid: { type: String, required: true },
    name: { type: String, required: true },
    identification: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true },
    source: { type: String, required: true },
    contacts: [
        {
            note: { type: String }
        }
    ],
}, {
    versionKey: false,
    timestamps: true
});
//# sourceMappingURL=ClientSchemaMongo.js.map