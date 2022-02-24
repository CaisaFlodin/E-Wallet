import { createSlice } from "@reduxjs/toolkit";

//kontrollerar och uppdaterar cards state
const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cardList: [
      {
        cardFirstName: "Kalle",
        cardLastName: "Anka",
        cardNumber: 1234567812345678,
        validMonth: 12,
        validYear: 22,
        cvc: 123,
        vendor: "Visa",
        id: Date.now(),
        isActive: true,
      },
    ],
  },
  //hanterar vår addNewCard action
  reducers: {
    addNewCard: (state, action) => {
      const newCard = {
        cardNumber: action.payload.cardNumber,
        cardFirstName: action.payload.cardFirstName,
        cardLastName: action.payload.cardLastName,
        validMonth: action.payload.validMonth,
        validYear: action.payload.validYear,
        cvc: action.payload.cvc,
        vendor: action.payload.vendor,
        isActive: false,
        id: Date.now(),
      };

      state.cardList = [...state.cardList, newCard];
    },
    removeCard: (state, action) => {
      return {
        cardList: state.cardList.filter(
          (card) => card.id !== action.payload.id
        ),
      };
    },
    toggleActive: (state, action) => {
      //The findIndex() method returns an index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
      const index = state.cardList.findIndex(
        (card) => card.id === action.payload.id
      );
      state.cardList[index].isActive = action.payload.isActive;
    },
  },
});
export default cardSlice.reducer;
export const { addNewCard, toggleActive, removeCard } = cardSlice.actions;
