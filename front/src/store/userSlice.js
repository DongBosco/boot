import {createSlice} from "@reduxjs/toolkit";
import { loginUser } from "./thunkFunctions";
import {toast} from "react-toastify"

const initialState = {
  userData: {
    id: "",
    eamil: "",
    name: "",
    role: 0,
    image: "",
  },
  isAuth: false,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
      builder
      .addCase(loginUser.pending,(state)=>{
        state.isLoading =true;
      })
      .addCase(loginUser.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.userData= action.payload;
        toast.info("로그인에 성공하였습니다.")
        state.isAuth=true
        localStorage.setItem('accessToken',action.payload.accessToken)
      })
      .addCase(loginUser.rejected,(state,action)=>{})1
  }
});

export default userSlice.reducer;