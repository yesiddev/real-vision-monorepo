import { UserInfo } from "@/types/models/user/UserInfo";
import { createSlice } from "@reduxjs/toolkit";

const EmptyAdminState: UserInfo[] = [
  {
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
  },
];

export const adminsSlice = createSlice({
  name: "admins",
  initialState: {
    admins: EmptyAdminState,
    loading: false,
  },
  reducers: {
    loadingProducts: (state) => {
      state.loading = true;
    },
    setAdmins: (state, action) => {
      state.loading = false;
      state.admins = action.payload.admins;
    },
  },
});

export const { loadingProducts, setAdmins } = adminsSlice.actions;
