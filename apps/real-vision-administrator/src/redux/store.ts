import { User, UserInfo } from "@/types/models/user/UserInfo";
import { configureStore } from "@reduxjs/toolkit";
import { Product } from "@rv/types";
import { productsSlice, softwarePostSlice, user } from "./states";
import userSliceReducer  from "./states/admins/user";

interface ProductSlice {
    products: Product[];
    loading: boolean;
}

export interface AppStore {
    user: User;
    products: ProductSlice;
    softwarePosts: any;
}

export default configureStore<AppStore>({
    reducer: {
        user: userSliceReducer,
        products: productsSlice.reducer,
        softwarePosts: softwarePostSlice.reducer,
    }
}) 

