import { Admin, AdminSchemaMongo } from "@rv/types";
import {Collection, getModel} from '@rv/constant-definitions/dist'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

type AdminPartial = Partial<Admin>;

interface AdminSignin extends AdminPartial {
  token: string;
}

export const signinAdmins = async ({username, password}: AdminPartial): Promise<AdminSignin | Error> => {
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || '';
    const model = await getModel(Collection.ADMINS, AdminSchemaMongo);  

    const admin = await model.findOne({username});

    if(!admin) return new Error('User dont exist');

    if(password == null) return new Error('Password must be provided'); 
    
    const match = await bcrypt.compare(password, admin.password);

    if(!match) return new Error('Invalid password');

    const token = await jwt.sign({uuid: admin.uuid}, JWT_SECRET_KEY, {expiresIn: '12h'});

    return {token, ...admin._doc};
}