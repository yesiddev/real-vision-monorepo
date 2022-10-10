import { rvApi } from "@/api";
import { SoftwarePost } from "@rv/types";
import { loadingIssues, PartialIssue, setIssues } from "./issuesSlice"

export const createIssueThunk = async (info: PartialIssue) => {
    const { data } = await rvApi.post("/issues", { ...info });
    console.log(data)
    return data;
  };

  
export const getIssues = () => async (dispatch: any, getState:any) => {
    dispatch(loadingIssues());
    const {data} = await rvApi.get('/issues')
    console.log("SOFTWARE POSTS", data)
    dispatch(setIssues({issues: data}));
}
