import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardInfo: [
    {
      cardFirstname: "",
      cardLastname: "",
      cardNumber: "1234567899999999",
      cardMonth: "01",
      cardYear: "22",
      cvc: "123",
      vendor: "Visa",
      cardActive: true,
    },
  ],
};
const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cardInformation.concat(action.payload);
    },
  },
});

export const { addCard } = cardSlice.actions;

export default cardSlice.reducer;
