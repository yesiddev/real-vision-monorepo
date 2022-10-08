import { Issue, IssueSchemaMongo } from "@rv/types";
import {Collection, getModel} from '@rv/constant-definitions/dist'

export const listIssue = async (): Promise<Issue[]> => {
    const model = await getModel(Collection.ISSUES, IssueSchemaMongo);  
    const issues: Issue[] = await model.find({})
    return issues;
}