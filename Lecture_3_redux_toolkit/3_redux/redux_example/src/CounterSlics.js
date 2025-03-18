import {createSlice} from "@reduxjs/toolkit"

const counterSlice=createSlice({
    name:"counterSlice",
    initialState:{
        count:10,
    }
})
export default counterSlice;