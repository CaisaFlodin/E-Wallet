import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardInfo: [
    {
      cardHolderFirst:"Kalle",
      cardHolderLast: "Anka",
      cardNumber: "1234 5678 9999 9999",
      validThruMonth: "02",
      validThruYear: "22",
      cvc: "123",
      vendor: "Visa",
      
    },
  ],
  cardActive: true,
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
