import { createSlice } from "@reduxjs/toolkit";

//kontrollerar och uppdaterar cards state
const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cardList: [
      {
        cardNumber: "1234 5678 1234 5678",
        cardHolderName: "Kalle Anka",
        validMonth: "12",
        validYear: "/ 22",
        cvc: 123,
        id: 1,
        isActive: true,
      },
    ],
    activeObj: 1,
  },
  //hanterar vår addNewCard action
  reducers: {
    addNewCard: (state, action) => {
      const newCard = {
        cardNumber: action.payload.cardNumber,
        cardHolderName: action.payload.cardHolderName,
        validMonth: action.payload.validMonth,
        validYear: action.payload.validYear,
        cvc: action.payload.cvc,
        vendor: action.payload.vendor,
        id: Date.now(),
        isActive: false,
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
    // toggleActive: (state, action) => {
    //   //The findIndex() method returns an index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
    //   const index = state.cardList.findIndex(
    //     (card) => card.id === action.payload.id
    //   );
    //   state.cardList[index].isActive = action.payload.isActive;
    // },
    toggleActive: (state, action) => {
      //The findIndex() method returns an index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
      const index = state.cardList.findIndex(
        (card) => card.id === action.payload.id
      );

      state.activeObj = state.cardList[index].id;
    },
  },
});
export default cardSlice.reducer;
export const { addNewCard, toggleActive, removeCard } = cardSlice.actions;
