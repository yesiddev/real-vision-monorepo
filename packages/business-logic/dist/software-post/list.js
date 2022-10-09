"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listSoftwarePosts = void 0;
const types_1 = require("@rv/types");
const dist_1 = require("@rv/constant-definitions/dist");
const listSoftwarePosts = async () => {
    const model = await (0, dist_1.getModel)(dist_1.Collection.SOFTWARE_POSTS, types_1.SoftwarePostSchemaMongo);
    const posts = await model.find({});
    return posts;
};
exports.listSoftwarePosts = listSoftwarePosts;
//# sourceMappingURL=list.js.map