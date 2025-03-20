import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlics.js";

const store = configureStore({
    reducer: {
        counterSection: counterSlice.reducer,
    }
})
export default store;