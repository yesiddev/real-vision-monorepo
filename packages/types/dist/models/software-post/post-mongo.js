"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwarePostSchemaMongo = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const slugify_1 = tslib_1.__importDefault(require("slugify"));
exports.SoftwarePostSchemaMongo = new mongoose_1.Schema({
    uuid: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    views: { type: Number },
    description: { type: String, required: true },
    content: { type: String, required: true },
    comments: [{
            body: { type: String, required: true },
            name: { type: String, required: true }
        }
    ],
    likes: { type: Number },
    user_photo: { type: String, required: true },
    user_name: { type: String, required: true },
    status: { type: String, default: 'active' },
    language: { type: String, default: 'spanish' },
}, {
    versionKey: false,
    timestamps: true
});
exports.SoftwarePostSchemaMongo.pre('validate', function (next) {
    if (this.title) {
        this.slug = (0, slugify_1.default)(this.title, { lower: true, strict: true });
    }
    next();
});
//# sourceMappingURL=post-mongo.js.map