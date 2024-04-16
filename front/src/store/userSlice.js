import React from 'react'
import {createSlice} from "@reduxjs/toolkit"

const initialState={
    userData:{
        id:"",
        email:"",
        name:"",
        role:0,
        image:""
    },
    isAuth:false,
    isLoading:false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducer:{},
    // extraReducers:(builder)=>{
    //     builder.addCase()
    // }
})

export default userSlice.reducer

