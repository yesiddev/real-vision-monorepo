import { createSlice } from "@reduxjs/toolkit";

export const softwarePostSlice = createSlice({
    name: 'softwarePosts',
    initialState: {
        page: 0,
        posts: [],
        loading: false,
    },
    reducers: {
        loadingSoftwarePosts: (state) => {
            state.loading = true;
        },
        setPosts: (state, action) => {
            state.loading = false;
            state.posts = action.payload.posts;
        }
    }
});

export const {loadingSoftwarePosts, setPosts} = softwarePostSlice.actions;