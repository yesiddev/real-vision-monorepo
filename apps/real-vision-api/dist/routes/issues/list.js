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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIssuesRoute = void 0;
const dist_1 = require("@rv/business-logic/dist");
exports.getIssuesRoute = {
    method: 'GET',
    url: '/issues',
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const issues = yield (0, dist_1.listIssue)();
            reply.send(issues);
        }
        catch (err) {
            if (err instanceof Error) {
                reply.send(500).send(err);
            }
        }
    })
};
