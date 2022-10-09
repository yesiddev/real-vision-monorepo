import { rvApi } from "@/api";
import axios from "axios";
import { loadingProducts, setAdmins } from "./adminsSlice"

export const getAdmins = () => async (dispatch: any, getState:any) => {
    dispatch(loadingProducts());
    // const {data} = await rvApi.get('/products')
    const {data} = await axios.get('https://real-vision-api.herokuapp.com/admins')
    console.log(data)
    dispatch(setAdmins({admins: data}));
}
