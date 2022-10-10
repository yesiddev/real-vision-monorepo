import {
  createIssue,
  createSoftwarePost,
  signinAdmins,
} from "@rv/business-logic/dist";
import { Issue } from "@rv/types";
import { RouteOptions } from "fastify";

export const createIssueRoute: RouteOptions = {
  method: "POST",
  url: "/issues",
  handler: async (request, reply) => {
    const { body } = request;
    const { type, title, description, status, assigness, reporter, estimate, priority } =
      body as Issue;
    try {
      const issue = await createIssue({
        type,
        title,
        description,
        status,
        assigness,
        reporter,
        priority,
        estimate,
      });
      reply.status(200).send(issue);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
