import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/CounterSlics.js";
import counterInputSlice from "./slice/CounterInputSlice.js";
const store = configureStore({
    reducer: {
        counterSection: counterSlice.reducer,
        counterInputSlice: counterInputSlice.reducer,
    }
})
export default store;