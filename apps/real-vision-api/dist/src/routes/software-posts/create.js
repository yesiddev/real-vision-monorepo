"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSoftwarePostRoute = void 0;
const dist_1 = require("@rv/business-logic/dist");
exports.createSoftwarePostRoute = {
    method: 'POST',
    url: '/software-post',
    handler: async (request, reply) => {
        const { body } = request;
        const { title, category, image, description, content, user_photo, user_name } = body;
        try {
            const admin = await (0, dist_1.createSoftwarePost)({ title,
                category,
                image,
                description,
                content,
                user_photo,
                user_name });
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
//# sourceMappingURL=create.js.map