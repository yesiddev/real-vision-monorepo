import { RouteOptions } from "fastify";
import { createIssueRoute } from "./create";
import { getIssuesRoute } from "./list";

export const issuesRoutes: RouteOptions[] = [
    getIssuesRoute,
    createIssueRoute
]