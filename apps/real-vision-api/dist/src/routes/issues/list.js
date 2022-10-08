"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIssuesRoute = void 0;
exports.getIssuesRoute = {
    method: 'GET',
    url: '/issues',
    handler: async (request, reply) => {
        try {
            // const issues = await listIssue();
            // reply.send(issues);
        }
        catch (err) {
            if (err instanceof Error) {
                reply.send(500).send(err);
            }
        }
    }
};
//# sourceMappingURL=list.js.map