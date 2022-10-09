"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSoftwarePost = void 0;
const types_1 = require("@rv/types");
const dist_1 = require("@rv/constant-definitions/dist");
const uuid_1 = require("uuid");
const createSoftwarePost = async (data) => {
    const model = await (0, dist_1.getModel)(dist_1.Collection.SOFTWARE_POSTS, types_1.SoftwarePostSchemaMongo);
    const uuid = (0, uuid_1.v4)();
    const post = new model({ ...data, uuid });
    if (!post) {
        throw new Error('Dont have any post with this post');
    }
    await post.save();
    return post._doc;
};
exports.createSoftwarePost = createSoftwarePost;
//# sourceMappingURL=create.js.map