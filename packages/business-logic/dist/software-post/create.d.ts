import { SoftwarePost } from "@rv/types";
declare type SoftwarePostPartial = Partial<SoftwarePost>;
export declare const createSoftwarePost: (data: SoftwarePostPartial) => Promise<SoftwarePost | Error>;
export {};
