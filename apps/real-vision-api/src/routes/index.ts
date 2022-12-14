import { FastifyInstance, RouteOptions } from "fastify";
import { adminsRoutes } from "./admins";
import { issuesRoutes } from "./issues";
import { softwarePostsRoutes } from "./software-posts";

const routes: RouteOptions[] = [
    ...issuesRoutes,
    ...adminsRoutes,
    ...softwarePostsRoutes
]
export const registerRoutes = (fastify: FastifyInstance) => {
    fastify.log.warn("Registering routes", routes);

  routes.map((route) => {
    fastify.route(route);
  });
}