import { Schema } from "mongoose";
import { Issue } from "./issue";


export const IssueSchemaMongo = new Schema<Issue>({
    uuid: {type: String, required: true},
    type: {type: String, required: true},
    code: {type: Number, required: true},
    title: {type: String, required: true},
    description: {type: "string", required: true},
    status: {type: "string", required: true},
    assigness: [{type: String, required: true}],
    reporter: {type: String, required: true},
    estimate: {type: Number, required: true},
    project: {type: String, required: true},
}, {
    versionKey: false,
    timestamps: true
})