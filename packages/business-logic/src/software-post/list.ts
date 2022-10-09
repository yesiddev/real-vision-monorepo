import { SoftwarePost, SoftwarePostSchemaMongo } from "@rv/types";
import {Collection, getModel} from '@rv/constant-definitions/dist'

export const listSoftwarePosts = async (): Promise<SoftwarePost[]> => {
    const model = await getModel(Collection.SOFTWARE_POSTS, SoftwarePostSchemaMongo);  
    const posts: SoftwarePost[] = await model.find({})
    return posts;
}