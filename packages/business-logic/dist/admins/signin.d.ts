import { Admin } from "@rv/types";
declare type AdminPartial = Partial<Admin>;
interface AdminSignin extends AdminPartial {
    token: string;
}
export declare const signinAdmins: ({ username, password }: AdminPartial) => Promise<AdminSignin | Error>;
export {};
