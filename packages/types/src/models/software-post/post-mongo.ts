import { Schema } from "mongoose";
import { SoftwarePost } from "./software-post";
import slugify from 'slugify';

export const SoftwarePostSchemaMongo = new Schema<SoftwarePost>({
    uuid: {type: String, required: true, unique: true},
    title: {type: String, required: true},
    slug: {type: String, required: true, unique: true},
    category: {type: String, required: true},
    image: {type: String, required: true},
    views: {type: Number},
    description: {type: String, required: true},
    content: {type: String, required: true},
    comments: [{
        body: {type: String, required: true},
        name: {type: String, required: true}
        }
    ],
    likes: {type: Number},
    user_photo: {type: String, required: true},
    user_name: {type: String, required: true},
    status: {type: String, default: 'active'},
    language: {type: String, default: 'spanish'},
}, {
    versionKey: false,
    timestamps: true
})

SoftwarePostSchemaMongo.pre('validate', function(this, next) {
    if(this.title){
        this.slug = slugify(this.title, {lower:true, strict: true})
    }
    next();
})