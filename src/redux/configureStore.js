import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./slices/cardSlice"

const store = configureStore({
    reducer: {
        cardSlice
    }
});

export default store;