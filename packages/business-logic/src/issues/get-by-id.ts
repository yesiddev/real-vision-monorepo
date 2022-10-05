import { Issue, IssueSchemaMongo } from "@rv/types";
import {Collection, getModel} from '@rv/constant-definitions/dist'

export const listIssue = async (uuid: string): Promise<Issue[]> => {
    const model = await getModel(Collection.ISSUE, IssueSchemaMongo);  
    const issues: Issue[] = await model.find({uuid: uuid});
    return issues;
}