"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.initDataSources = void 0;
const cors_1 = __importDefault(require("@fastify/cors"));
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = require("../routes");
const dist_1 = require("@rv/constant-definitions/dist");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const initDataSources = ({ mongoose }) => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose) {
        yield (0, dist_1.initMongoose)(mongoose);
    }
});
exports.initDataSources = initDataSources;
(() => __awaiter(void 0, void 0, void 0, function* () {
    const server = (0, fastify_1.default)({ logger: true });
    (0, exports.initDataSources)({
        mongoose: {
            mongoUrl: process.env.MONGODB_URL
        }
    });
    server.register(cors_1.default, {
        origin: "http:localhost:5173"
    });
    server.register((instance, options, next) => {
        (0, routes_1.registerRoutes)(instance);
        next();
    }, { prefix: 'api/v3' });
    const serverAddress = yield server.listen({ port: 5000, host: '0.0.0.0' }, () => {
        server.log.info(`Backend App is running at http://localhost:${5000}`);
        server.log.info('Press CTRL-c to stop');
    });
    server.log.info(`server succesfully started on: ${serverAddress}`);
}))();
