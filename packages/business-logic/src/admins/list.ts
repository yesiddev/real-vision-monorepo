import { Admin, AdminSchemaMongo } from "@rv/types";
import {Collection, getModel} from '@rv/constant-definitions/dist'

export const listAdmins = async (): Promise<Admin[]> => {
    const model = await getModel(Collection.ADMINS, AdminSchemaMongo);  
    const admin: Admin[] = await model.find({})
    return admin;
}