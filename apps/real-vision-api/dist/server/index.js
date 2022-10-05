"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("@fastify/cors"));
const fastify_1 = __importDefault(require("fastify"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    const server = (0, fastify_1.default)({ logger: true });
    server.register(cors_1.default, {
        origin: "http:localhost:5173"
    });
    const serverAddress = yield server.listen({ port: 5000, host: '0.0.0.0' }, () => {
        server.log.info(`Backend App is running at http://localhost:${5000}`);
        server.log.info('Press CTRL-c to stop');
    });
    server.log.info(`server succesfully started on: ${serverAddress}`);
}))();
