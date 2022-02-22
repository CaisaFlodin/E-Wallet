import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./slices/cardSlice";

const store = configureStore({
  reducer: {
    cardInfo: cardSlice,
  },
});

export default store;
