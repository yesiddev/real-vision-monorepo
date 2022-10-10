"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.issuesRoutes = void 0;
const create_1 = require("./create");
const list_1 = require("./list");
exports.issuesRoutes = [
    list_1.getIssuesRoute,
    create_1.createIssueRoute
];
//# sourceMappingURL=index.js.map