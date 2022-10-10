import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Issue } from "@rv/types";
import { createIssueThunk } from "./thunks";

interface EmptyIssue {

}

const initialState = {
    issues: [],
    loading: false,
    success: false,
    error: ''
}



export type PartialIssue = Partial<Issue>;

export const createIssue = createAsyncThunk('issues/create', 

    async(data: PartialIssue, thunkAPI) => {
        try{
            return await createIssueThunk(data);
        }catch(err){
            console.log(err);
        }
    }
)

export const issuesSlice = createSlice({
    name: 'issues',
    initialState,
    reducers: {
        loadingIssues: (state) => {
            state.loading = true;
        },
        setIssues: (state, action) => {
            state.loading = false;
            state.issues = action.payload.issues;
        },
        resetIssues: (state) => {
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(createIssue.pending, (state) => {
            state.loading = true
          })
          .addCase(createIssue.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
          })
          .addCase(createIssue.rejected, (state, action) => {
            state.loading = false
            state.error = String(action.payload)
          })
        }
});

export const {resetIssues} = issuesSlice.actions
export const {loadingIssues, setIssues} = issuesSlice.actions;