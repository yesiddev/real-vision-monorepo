import { Schema } from "mongoose";
import { Category } from "./category";


export const CategorySchemaMongo = new Schema<Category>({
    uuid: {type: String, required: true},
    name: {type: String, required: true},
    icon: {type: String, required: true},
}, {
    versionKey: false,
    timestamps: true
})