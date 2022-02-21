import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardInfo: [
    {
      cardHolder: "",
      cardNumber: "1234567899999999",
      cardMonth: "01",
      cardYear: "22",
      cvc: "123",
      vendor: "Visa",
      cardActive: true,
    },
  ],
};
// concat används i slicen, om det ej funkar så kanske push funkar
const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addNewCard: (state, action) => {
      state.cardInfo.concat(action.payload);
    },
  },
});

export const { addNewCard } = cardSlice.actions;

export default cardSlice.reducer;
