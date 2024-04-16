import {createAsyncThunk} from "@reduxjs/toolkit"
import axiosInstance from "../utils/axios"

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (body)=>{
        try {
            const res = await axiosInstance.post("/user/login")
            return res.data;
            } catch (error) {
            console.log(error)
        }
    }
)