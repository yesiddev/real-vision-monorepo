import { createSoftwarePost, signinAdmins } from "@rv/business-logic/dist";
import { SoftwarePost } from "@rv/types";
import { RouteOptions } from "fastify";

export const createSoftwarePostRoute: RouteOptions = {
  method: "POST",
  url: "/software-post",
  handler: async (request, reply) => {
    const { body } = request;
    const {
      title,
      category,
      image,
      description,
      content,
      user_photo,
      user_name,
    } = body as SoftwarePost;
    try {
      const admin = await createSoftwarePost({
        title,
        category,
        image,
        description,
        content,
        user_photo,
        user_name,
      });
      reply.status(200).send(admin);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
