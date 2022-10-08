"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminSchemaMongo = void 0;
const mongoose_1 = require("mongoose");
exports.AdminSchemaMongo = new mongoose_1.Schema({
    uuid: { type: String, required: true },
    name: { type: String, required: true },
    middlename: { type: String, required: true },
    lastname: { type: String, required: true },
    middlelastname: { type: String, required: true },
    username: { type: String, required: true },
    identification: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    status: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String, required: true },
    position: { type: String, required: true },
    location: { type: String, required: true },
    birthday: { type: String, required: true },
    age: { type: Number, required: true },
}, {
    versionKey: false,
    timestamps: true
});
//# sourceMappingURL=admin-mongo.js.map