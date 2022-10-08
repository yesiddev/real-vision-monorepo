import { FastifyInstance, RouteOptions } from "fastify";
import { adminsRoutes } from "./admins";
import { issuesRoutes } from "./issues";

const routes: RouteOptions[] = [
    ...issuesRoutes,
    ...adminsRoutes
]
export const registerRoutes = (fastify: FastifyInstance) => {
    fastify.log.warn("Registering routes", routes);

  routes.map((route) => {
    fastify.route(route);
  });
}