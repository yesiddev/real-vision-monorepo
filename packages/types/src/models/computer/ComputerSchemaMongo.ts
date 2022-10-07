import { Schema } from "mongoose";
import { Brand } from "./computer";


export const BrandSchemaMongo = new Schema<Brand>({
    uuid: {type: String, required: true},
    name: {type: String, required: true},
    slug: {type: String, required: true},
    specs: [{type: String, required: true}],
}, {
    versionKey: false,
    timestamps: true
})