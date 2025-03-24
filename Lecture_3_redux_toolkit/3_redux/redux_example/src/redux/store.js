import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/CounterSlics.js";
import counterInputSlice from "./slice/CounterInputSlice.js";
import userSlice from "./slice/UserSlice.js";
const store = configureStore({
    reducer: {
        counterSection: counterSlice.reducer,
        counterInputSlice: counterInputSlice.reducer,
        userSection:userSlice.reducer,
    }
})
export default store;