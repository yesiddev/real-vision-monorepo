import { rvApi } from "@/api";
// import { loadingSignin, loginUser } from "./user";

// export const signinAdmin = (username: string, password: string) => {
//   return async (dispatch: any, getState: any) => {
//     dispatch(loadingSignin());
//     try{
//         const { data } = await rvApi.post("/admin-signin", { username, password });
//         console.log(data);
//         dispatch(loginUser(data));
//     }catch(error){
//         console.log(error);
//     }
//   };
// };

export const signinAdmin = async (username: string, password: string) => {
  const { data } = await rvApi.post("/admin-signin", { username, password });
  console.log(data)
  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  return data;
};

export const logoutAdmin = () => {
  localStorage.removeItem("user");
};
