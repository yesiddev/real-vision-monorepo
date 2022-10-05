import fastifyCors from "@fastify/cors";
import fastify from "fastify";

(async() => {
    const server = fastify({logger: true});

    server.register(fastifyCors, {
        origin: "http:localhost:5173"
    });

    const serverAddress = await server.listen({port: 5000, host: '0.0.0.0'}, () => {
        server.log.info(`Backend App is running at http://localhost:${5000}`);
        server.log.info('Press CTRL-c to stop');
    });

    server.log.info(`server succesfully started on: ${serverAddress}`);
})();