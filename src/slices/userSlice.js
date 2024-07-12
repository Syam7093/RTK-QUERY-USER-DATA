import { createSlice } from "@reduxjs/toolkit";


const initialState={
    users:[]
}

export const userSlice=createSlice({
    name:"reduxstore",
    initialState,
    reducers:{
        setusers:(state,action)=>{
            state.users=action.payload
        }
    }
})

export const {setusers}=userSlice.actions