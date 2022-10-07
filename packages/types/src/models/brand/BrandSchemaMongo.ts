import { Schema } from "mongoose";
import { Brand } from "./brand";


export const BrandSchemaMongo = new Schema<Brand>({
    uuid: {type: String, required: true},
    name: {type: String, required: true},
}, {
    versionKey: false,
    timestamps: true
})