import { rvApi } from "@/api";
import axios from "axios";
import { loadingProducts, setProducts } from "./productsSlice"

export const getProducts = () => async (dispatch: any, getState:any) => {
    dispatch(loadingProducts());
    const {data} = await rvApi.get('/products')
    console.log(data)
    dispatch(setProducts({products: data}));
}
