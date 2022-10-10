"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIssuesRoute = void 0;
const dist_1 = require("@rv/business-logic/dist");
exports.getIssuesRoute = {
    method: 'GET',
    url: '/issues',
    handler: async (request, reply) => {
        try {
            const issues = await (0, dist_1.listIssue)();
            reply.send(issues);
        }
        catch (err) {
            if (err instanceof Error) {
                reply.send(500).send(err);
            }
        }
    }
};
//# sourceMappingURL=list.js.map