import { RouteOptions } from "fastify";
import { getIssuesRoute } from "./list";

export const issuesRoutes: RouteOptions[] = [
    getIssuesRoute,
]