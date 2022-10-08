"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAdmins = void 0;
const types_1 = require("@rv/types");
const dist_1 = require("@rv/constant-definitions/dist");
const listAdmins = async () => {
    const model = await (0, dist_1.getModel)(dist_1.Collection.ADMINS, types_1.AdminSchemaMongo);
    const admin = await model.find({});
    return admin;
};
exports.listAdmins = listAdmins;
//# sourceMappingURL=list.js.map