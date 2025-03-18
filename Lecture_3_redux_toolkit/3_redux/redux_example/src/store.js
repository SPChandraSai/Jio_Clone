import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlics.js";

const store=configureStore({
    reducer:{
        counterState:counterSlice.reducer,
    }
})
export default store;