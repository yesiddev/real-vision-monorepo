"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const admins_1 = require("./admins");
const issues_1 = require("./issues");
const software_posts_1 = require("./software-posts");
const routes = [
    ...issues_1.issuesRoutes,
    ...admins_1.adminsRoutes,
    ...software_posts_1.softwarePostsRoutes
];
const registerRoutes = (fastify) => {
    fastify.log.warn("Registering routes", routes);
    routes.map((route) => {
        fastify.route(route);
    });
};
exports.registerRoutes = registerRoutes;
//# sourceMappingURL=index.js.map