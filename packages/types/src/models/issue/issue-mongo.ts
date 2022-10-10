import { Schema } from "mongoose";
import { Issue } from "./issue";


export const IssueSchemaMongo = new Schema<Issue>({
    uuid: {type: String, required: true},
    type: {type: String},
    code: {type: Number},
    title: {type: String},
    description: {type: String},
    status: {type: String},
    priority: {type: String},
    assigness: [
        {
            name: {type: String},
            photo: {type: String},
            item: {type: String},
        }
    ],
    reporter: {
        name:{ type: String},
        photo:{ type: String},
        item:{ type: String},

    },
    estimate: {
        time_spent: {type: Number},
        time_remaining: {type: Number},
    },
    project: {type: String},
}, {
    versionKey: false,
    timestamps: true
})