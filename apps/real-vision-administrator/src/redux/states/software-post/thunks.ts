import { rvApi } from "@/api";
import { loadingSoftwarePosts, setPosts } from "./softwarePostSlice"

export const getPosts = () => async (dispatch: any, getState:any) => {
    dispatch(loadingSoftwarePosts());
    const {data} = await rvApi.get('/software-post')
    console.log("SOFTWARE POSTS", data)
    dispatch(setPosts({posts: data}));
}
