"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listIssue = void 0;
const types_1 = require("@rv/types");
const dist_1 = require("@rv/constant-definitions/dist");
const listIssue = async () => {
    const model = await (0, dist_1.getModel)(dist_1.Collection.ISSUE, types_1.IssueSchemaMongo);
    const issues = await model.find({});
    return issues;
};
exports.listIssue = listIssue;
//# sourceMappingURL=list.js.map