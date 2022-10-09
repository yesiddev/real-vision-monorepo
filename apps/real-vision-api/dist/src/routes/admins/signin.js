"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinAdminRoute = void 0;
const dist_1 = require("@rv/business-logic/dist");
exports.signinAdminRoute = {
    method: 'POST',
    url: '/admin-signin',
    handler: async (request, reply) => {
        const { body } = request;
        const { username, password } = body;
        try {
            const admin = await (0, dist_1.signinAdmins)({ username, password });
            reply.status(200).send(admin);
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err);
                reply.status(500).send(err);
            }
        }
    }
};
//# sourceMappingURL=signin.js.map