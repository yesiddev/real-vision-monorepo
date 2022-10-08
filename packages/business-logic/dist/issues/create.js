"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIssue = void 0;
const types_1 = require("@rv/types");
const dist_1 = require("@rv/constant-definitions/dist");
const uuid_1 = require("uuid");
const createIssue = async (data) => {
    const model = await (0, dist_1.getModel)(dist_1.Collection.ISSUES, types_1.IssueSchemaMongo);
    const uuid = (0, uuid_1.v4)();
    const issue = new model({ ...data, uuid });
    if (!issue) {
        throw new Error('Dont have any issues with this issue');
    }
    await issue.save();
    return issue._doc;
};
exports.createIssue = createIssue;
//# sourceMappingURL=create.js.map