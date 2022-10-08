import { Issue, IssueSchemaMongo } from "@rv/types";
import {Collection, getModel} from '@rv/constant-definitions/dist'
import {v4 as UUID} from 'uuid';

export const createIssue = async (data: Issue): Promise<Issue | Error> => {
    const model = await getModel(Collection.ISSUES, IssueSchemaMongo);  
    const uuid = UUID();
    const issue = new model({...data, uuid});

    if(!issue){throw new Error('Dont have any issues with this issue')}
    
    await issue.save();
    return issue._doc;
}