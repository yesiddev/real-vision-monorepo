import {signinAdmins} from '@rv/business-logic/dist'
import { Admin } from '@rv/types';
import { RouteOptions } from 'fastify'

export const signinAdminRoute: RouteOptions = {
    method: 'POST',
    url: '/admin-signin',
    handler: async (request, reply) => {
        const {body} = request;
        const {username, password} = body as Admin;
        try{
            const admin = await signinAdmins({username, password});
            reply.status(200).send(admin);
        }catch(err){
            if(err instanceof Error){
                console.log(err)
                reply.status(500).send(err);
            }
        }
    }
}