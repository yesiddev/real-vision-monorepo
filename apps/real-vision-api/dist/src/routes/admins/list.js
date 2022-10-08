"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminsRoute = void 0;
const dist_1 = require("@rv/business-logic/dist");
exports.getAdminsRoute = {
    method: 'GET',
    url: '/admins',
    handler: async (request, reply) => {
        try {
            const admins = await (0, dist_1.listAdmins)();
            reply.send(admins);
        }
        catch (err) {
            if (err instanceof Error) {
                reply.send(500).send(err);
            }
        }
    }
};
//# sourceMappingURL=list.js.map