import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SoftwarePost } from "@rv/types";
import { createPost } from "./thunks";

const initialState = {
    posts: [],
    loading: false,
    success: false,
    error: ''
}

export type PartialSoftwarePost = Partial<SoftwarePost>;

export const createSoftwarePost = createAsyncThunk('software-post/create', 

    async(data: PartialSoftwarePost, thunkAPI) => {
        try{
            return await createPost(data);
        }catch(err){
            console.log(err);
        }
    }
)

export const softwarePostSlice = createSlice({
    name: 'softwarePosts',
    initialState,
    reducers: {
        loadingSoftwarePosts: (state) => {
            state.loading = true;
        },
        setPosts: (state, action) => {
            state.loading = false;
            state.posts = action.payload.posts;
        },
        reset: (state) => {
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(createSoftwarePost.pending, (state) => {
            state.loading = true
          })
          .addCase(createSoftwarePost.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
          })
          .addCase(createSoftwarePost.rejected, (state, action) => {
            state.loading = false
            state.error = String(action.payload)
          })
        }
});

export const {reset} = softwarePostSlice.actions
export const {loadingSoftwarePosts, setPosts} = softwarePostSlice.actions;