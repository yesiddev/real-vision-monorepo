import { FastifyInstance, RouteOptions } from "fastify";
import { issuesRoutes } from "./issues";

const routes : RouteOptions[] = [
    ...issuesRoutes
]

export const registerRoutes = (fastify: FastifyInstance) => {
    fastify.log.warn("Registering routes", routes);
  
    routes.map((route) => {
      fastify.route(route);
    });
  };