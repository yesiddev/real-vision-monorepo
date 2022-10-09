import { listSoftwarePosts } from '@rv/business-logic/dist';
import { RouteOptions } from 'fastify'

export const getSoftwarePostsRoute: RouteOptions = {
    method: 'GET',
    url: '/software-posts',
    handler: async (request, reply) => {
        try{
            const posts = await listSoftwarePosts();
            reply.send(posts);
        }catch(err){
            if(err instanceof Error){
                reply.send(500).send(err);
            }
        }
    }
}