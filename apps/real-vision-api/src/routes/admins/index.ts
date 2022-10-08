import { RouteOptions } from "fastify";
import { getAdminsRoute } from "./list";
import { signinAdminRoute } from "./signin";

export const adminsRoutes: RouteOptions[] = [
    getAdminsRoute,
    signinAdminRoute
]