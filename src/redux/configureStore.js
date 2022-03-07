import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./slices/cardSlice";
import nameSlice from "./slices/nameSlice";
const store = configureStore({
  reducer: {
    cards: cardSlice,
    api: nameSlice,
  },
});

export default store;
