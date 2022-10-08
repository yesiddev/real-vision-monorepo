import { UserInfo } from "@/types/models/user/UserInfo";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { persistLocalStorage } from "@rv/utilities";
import { logoutAdmin, signinAdmin } from "./thunks";
// import { clearLocalStorage } from "@rv/utilities/dist/functions/localStorage";

export const EmptyUserState: UserInfo = {
  uuid: "",
  name: "",
  middlename: "",
  lastname: "",
  middlelastname: "",
  username: "",
  identification: "",
  email: "",
  phone: "",
  status: "",
  password: "",
  photo: "",
  position: "",
  location: "",
  birthday: "",
  payment: {
    bank: "",
    account: "",
    type: "",
  },
  age: 0,
  createdAt: "",
  updatedAt: "",
};

export const UserKey = "user";



const initialState = {
  user: localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user") as string)
  : EmptyUserState,
  error: '',
  success: false,
  loading: false
}

interface Props{
  username: string,
  password: string
}

export const login = createAsyncThunk('/signin', async(user: Props, thunkAPI) => {
  try {
    return await signinAdmin(user.username, user.password);
  } catch (err:any) {
      const message = err;
      // if(err.response){
      //   console.log(message.response.data.message)
      // }
      return thunkAPI.rejectWithValue(message.response.data.message)
  }
})

export const logout = createAsyncThunk('/logout', async () => {
  await logoutAdmin();
})


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false,
      state.success = false,
      state.error = '',
      state.user = EmptyUserState 
    }
    // loadingSignin: (state) => {
    //   state.loading = true;
    // },
    // loginUser: (state, action) => {
    //   state.loading = false;
    //   localStorage.setItem(UserKey, JSON.stringify(action.payload));
    //   // persistLocalStorage<UserInfo>(UserKey, action.payload);
    //   return action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.user = action.payload
    })
    .addCase(login.rejected, (state, action) => {
      state.loading = false
      state.error = String(action.payload)
      state.user = null
    })
    .addCase(logout.fulfilled, (state) => {
      state.user = null
    })
  }
});

export const { reset } = userSlice.actions;

export default userSlice.reducer;
