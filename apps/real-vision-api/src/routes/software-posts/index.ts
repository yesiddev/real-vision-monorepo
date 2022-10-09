import { RouteOptions } from "fastify";
import { createSoftwarePostRoute } from "./create";
import { getSoftwarePostsRoute } from "./list";

export const softwarePostsRoutes: RouteOptions[] = [
    getSoftwarePostsRoute,
    createSoftwarePostRoute
]