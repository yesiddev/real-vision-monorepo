import { UserInfo } from "@/types/models/user/UserInfo";
import { createSlice } from "@reduxjs/toolkit";
import { clearLocalStorage, persistLocalStorage } from "@rv/utilities";

export const EmptyUserState: UserInfo = {
    _id: "",
    uuid: "",
    name: '',
    username: '',
    token: '',
    photo: "",
    events: ""
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
            return EmptyUserState;
        }
    }
})

export const {loginUser, resetUser} = userSlice.actions;

export default userSlice.reducer;