import { SoftwarePost, SoftwarePostSchemaMongo } from "@rv/types";
import {Collection, getModel} from '@rv/constant-definitions/dist'
import {v4 as UUID} from 'uuid';

type SoftwarePostPartial = Partial<SoftwarePost>;

export const createSoftwarePost = async (data: SoftwarePostPartial): Promise<SoftwarePost | Error> => {
    const model = await getModel(Collection.SOFTWARE_POSTS, SoftwarePostSchemaMongo);  
    const uuid = UUID();
    const post = new model({...data, uuid});

    if(!post){throw new Error('Dont have any post with this post')}
    
    await post.save();
    return post._doc;
}