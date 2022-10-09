"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSoftwarePostsRoute = void 0;
const dist_1 = require("@rv/business-logic/dist");
exports.getSoftwarePostsRoute = {
    method: 'GET',
    url: '/software-posts',
    handler: async (request, reply) => {
        try {
            const posts = await (0, dist_1.listSoftwarePosts)();
            reply.send(posts);
        }
        catch (err) {
            if (err instanceof Error) {
                reply.send(500).send(err);
            }
        }
    }
};
//# sourceMappingURL=list.js.map