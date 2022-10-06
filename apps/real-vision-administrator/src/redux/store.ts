import { UserInfo } from "@/types/models/user/UserInfo";
import { configureStore } from "@reduxjs/toolkit";
import { Product } from "@rv/types";
import { productsSlice, softwarePostSlice } from "./states";
import userSliceReducer  from "./states/user";

interface ProductSlice {
    products: Product[];
    loading: boolean;
}

export interface AppStore {
    user: UserInfo;
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

