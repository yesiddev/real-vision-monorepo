import {listIssue} from '@rv/business-logic/dist'
import { RouteOptions } from 'fastify'


export const getIssuesRoute: RouteOptions = {
    method: 'GET',
    url: '/issues',
    handler: async (request, reply) => {
        try{
            const issues = await listIssue();
            reply.send(issues);
        }catch(err){
            if(err instanceof Error){
                reply.send(500).send(err);
            }
        }
    }
}