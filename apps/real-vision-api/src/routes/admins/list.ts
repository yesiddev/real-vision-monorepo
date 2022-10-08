import {listAdmins} from '@rv/business-logic/dist'
import { RouteOptions } from 'fastify'

export const getAdminsRoute: RouteOptions = {
    method: 'GET',
    url: '/admins',
    handler: async (request, reply) => {
        try{
            const admins = await listAdmins();
            reply.send(admins);
        }catch(err){
            if(err instanceof Error){
                reply.send(500).send(err);
            }
        }
    }
}