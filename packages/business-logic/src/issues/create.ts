import { Issue, IssueSchemaMongo } from "@rv/types";
import {Collection, getModel} from '@rv/constant-definitions/dist'
import {v4 as UUID} from 'uuid';

export const createIssue = async (data: Partial<Issue>): Promise<Issue | Error> => {
    const model = await getModel(Collection.ISSUES, IssueSchemaMongo);  
    const uuid = UUID();
    const issues = await model.find({});

    const code = 1000 + Number(issues.length); 
    
    const issue = new model({...data, uuid, code});

    if(!issue){throw new Error('Dont have any issues with this issue')}
    
    await issue.save();
    return issue._doc;
}