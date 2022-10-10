"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueSchemaMongo = void 0;
const mongoose_1 = require("mongoose");
exports.IssueSchemaMongo = new mongoose_1.Schema({
    uuid: { type: String, required: true },
    type: { type: String },
    code: { type: Number },
    title: { type: String },
    description: { type: String },
    status: { type: String },
    priority: { type: String },
    assigness: [
        {
            name: { type: String },
            photo: { type: String },
            item: { type: String },
        }
    ],
    reporter: {
        name: { type: String },
        photo: { type: String },
        item: { type: String },
    },
    estimate: {
        time_spent: { type: Number },
        time_remaining: { type: Number },
    },
    project: { type: String },
}, {
    versionKey: false,
    timestamps: true
});
//# sourceMappingURL=issue-mongo.js.map