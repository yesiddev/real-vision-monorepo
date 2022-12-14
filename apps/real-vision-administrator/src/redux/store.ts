import { User } from "@/types/models/user/UserInfo";
import { configureStore } from "@reduxjs/toolkit";
import { Admin, Issue, Product } from "@rv/types";
import { productsSlice, softwarePostSlice, user } from "./states";
import { adminsSlice } from "./states/admin";
import userSliceReducer  from "./states/admins/user";
import { issuesSlice } from "./states/issues";

interface ProductSlice {
    products: Product[];
    loading: boolean;
}

interface AdminSlice {
    admins: Admin[];
    loading: boolean;
}

interface IssueSlice {
    issues: Issue[];
    loading: boolean;
    success: boolean;
    error: string;
}


export interface AppStore {
    user: User;
    products: ProductSlice;
    admins: AdminSlice;
    softwarePosts: any;
    issues: any;
}

export default configureStore<AppStore>({
    reducer: {
        user: userSliceReducer,
        products: productsSlice.reducer,
        admins: adminsSlice.reducer,
        softwarePosts: softwarePostSlice.reducer,
        issues: issuesSlice.reducer
    }
}) 

