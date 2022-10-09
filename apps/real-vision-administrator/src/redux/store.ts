import { User, UserInfo } from "@/types/models/user/UserInfo";
import { configureStore } from "@reduxjs/toolkit";
import { Admin, Product } from "@rv/types";
import { productsSlice, softwarePostSlice, user } from "./states";
import { adminsSlice } from "./states/admin";
import userSliceReducer  from "./states/admins/user";

interface ProductSlice {
    products: Product[];
    loading: boolean;
}

interface AdminSlice {
    admins: Admin[];
    loading: boolean;
}

export interface AppStore {
    user: User;
    products: ProductSlice;
    admins: AdminSlice;
    softwarePosts: any;
}

export default configureStore<AppStore>({
    reducer: {
        user: userSliceReducer,
        products: productsSlice.reducer,
        admins: adminsSlice.reducer,
        softwarePosts: softwarePostSlice.reducer,
    }
}) 

