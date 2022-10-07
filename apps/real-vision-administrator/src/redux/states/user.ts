import { UserInfo } from "@/types/models/user/UserInfo";
import { createSlice } from "@reduxjs/toolkit";
// import { clearLocalStorage } from "@rv/utilities/dist/functions/localStorage";

export const EmptyUserState: UserInfo = {
    uuid:'',
    name: '',
    middlename: '',
    lastname: '',
    middlelastname: '',
    username: '',
    identification: '',
    email: '',
    phone: '',
    status: '',
    password: '',
    photo: '',
    position: '',
    location: '',
    birthday: '',
    payment: {
        bank: '',
        account: '',
        type: '',
    },
    age: 0,
    createdAt:  '',
    updatedAt: ''
};

export const UserKey = 'user';

export const userSlice = createSlice({
    name: 'user',
    initialState: localStorage.getItem('user') ?JSON.parse(localStorage.getItem('user') as string) : EmptyUserState,
    reducers: {
        loginUser: (state, action) => {
            // persistLocalStorage<UserInfo>(UserKey, action.payload);
            return action.payload;
        },
        resetUser: () => {
            // clearLocalStorage(UserKey);
            // clearLocalStorage(UserKey);
            return EmptyUserState;
        }
    }
})

export const {loginUser, resetUser} = userSlice.actions;

export default userSlice.reducer;