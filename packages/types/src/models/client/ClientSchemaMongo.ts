import { Schema } from "mongoose";
import { Client } from "./client";

export const ClientSchemaMongo = new Schema<Client>({
    uuid: {type: String, required: true},
    name: {type: String, required: true},
    identification: {type: String, required: true},
    phone: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    email: {type: String, required: true},
    source: {type: String, required: true},
    contacts: [
        {
            note: {type: String}
        }
    ],
}, {
    versionKey: false,
    timestamps: true
})