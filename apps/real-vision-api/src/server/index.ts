import fastifyCors from "@fastify/cors";
import fastify from "fastify";
import { registerRoutes } from "../routes";
import {initMongoose} from '@rv/constant-definitions/dist'

import * as dotenv from 'dotenv';
dotenv.config();

export interface InitMongooseOptions {
    mongoUrl: string;
}

export interface InitDataSourcesOptions {
    mongoose: InitMongooseOptions;
}


export const initDataSources = async ( {mongoose}: InitDataSourcesOptions) => {
    if(mongoose){
        await initMongoose(mongoose);
    }
}

(async() => {
    const server = fastify({logger: true});

    initDataSources({
        mongoose: {
            mongoUrl: process.env.MONGODB_URL as string
        }
    })

    server.register(fastifyCors, {
        origin: "http:localhost:5173"
    });

    server.register((instance, options, next) => {
        registerRoutes(instance);
        next();
    }, {prefix: 'api/v3'});

    const serverAddress = await server.listen({port: 5000, host: '0.0.0.0'}, () => {
        server.log.info(`Backend App is running at http://localhost:${5000}`);
        server.log.info('Press CTRL-c to stop');
    });

    server.log.info(`server succesfully started on: ${serverAddress}`);
})();