import { rvApi } from "@/api";
import { SoftwarePost } from "@rv/types";
import { loadingSoftwarePosts, PartialSoftwarePost, setPosts } from "./softwarePostSlice"

export const createPost = async (info: PartialSoftwarePost) => {
    const { data } = await rvApi.post("/software-post", { ...info });
    console.log(data)
    return data;
  };

  
export const getPosts = () => async (dispatch: any, getState:any) => {
    dispatch(loadingSoftwarePosts());
    const {data} = await rvApi.get('/software-post')
    console.log("SOFTWARE POSTS", data)
    dispatch(setPosts({posts: data}));
}
