"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinAdmins = void 0;
const tslib_1 = require("tslib");
const types_1 = require("@rv/types");
const dist_1 = require("@rv/constant-definitions/dist");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const signinAdmins = async ({ username, password }) => {
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || '';
    const model = await (0, dist_1.getModel)(dist_1.Collection.ADMINS, types_1.AdminSchemaMongo);
    const admin = await model.findOne({ username });
    if (!admin)
        return new Error('User dont exist');
    if (password == null)
        return new Error('Password must be provided');
    const match = await bcrypt_1.default.compare(password, admin.password);
    if (!match)
        return new Error('Invalid password');
    const token = await jsonwebtoken_1.default.sign({ uuid: admin.uuid }, JWT_SECRET_KEY, { expiresIn: '12h' });
    return { token, ...admin._doc };
};
exports.signinAdmins = signinAdmins;
//# sourceMappingURL=signin.js.map