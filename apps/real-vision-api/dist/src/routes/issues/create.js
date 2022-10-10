"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIssueRoute = void 0;
const dist_1 = require("@rv/business-logic/dist");
exports.createIssueRoute = {
    method: "POST",
    url: "/issues",
    handler: async (request, reply) => {
        const { body } = request;
        const { type, title, description, status, assigness, reporter, estimate, priority } = body;
        try {
            const issue = await (0, dist_1.createIssue)({
                type,
                title,
                description,
                status,
                assigness,
                reporter,
                priority,
                estimate,
            });
            reply.status(200).send(issue);
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err);
                reply.status(500).send(err);
            }
        }
    },
};
//# sourceMappingURL=create.js.map