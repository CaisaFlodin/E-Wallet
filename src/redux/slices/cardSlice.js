import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getInfo = createAsyncThunk("cardList", async () => {
  let response = await fetch("https://randomuser.me/api/");
  let json = await response.json();
  console.log(json);
  return json;
  //det som returneras här, kommer att bli vår action.payload
});
//kontrollerar och uppdaterar cards state
const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cardList: [
      {
        gender: "male",
        id: 1,
        cardHolderFirst: "Kenan ",
        cardHolderLast: "Akaydın",

        cardNumber: "1987 1345 1556 1341",
        validMonth: "12 /",
        validYear: 23,
        cvc: 123,
        vendor: "blank-bank",
      },
    ],
    activeObj: 1,

    status: null,
  },

  //hanterar vår addNewCard action
  reducers: {
    addNewCard: (state, action) => {
      const newCard = {
        cardNumber: action.payload.cardNumber,
        cardHolderFirst: action.payload.cardHolderFirst,
        cardHolderLast: action.payload.cardHolderLast,
        validMonth: action.payload.validMonth,
        validYear: action.payload.validYear,
        cvc: action.payload.cvc,
        vendor: action.payload.vendor,
        id: Date.now(),
        isActive: false,
      };

      state.cardList = [...state.cardList, newCard];
    },

    toggleActive: (state, action) => {
      //The findIndex() method returns an index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
      const index = state.cardList.findIndex(
        (card) => card.id === action.payload.id
      );

      state.activeObj = state.cardList[index].id;
    },
    removeCard: (state, action) => {
      const { id } = action.payload;
      state.cardList = state.cardList.filter((card) => card.id !== id);
    },
  },
  extraReducers: {
    [getInfo.fulfilled]: (state, action) => {
      state.cardList[0].cardHolderFirst = action.payload.results[0].name.first;
      state.cardList[0].cardHolderLast = action.payload.results[0].name.last;
      state.status = null;
    },
    [getInfo.pending]: (state) => {
      state.status = "Fetching todos. Please wait a moment...";
    },
    [getInfo.rejected]: (state) => {
      state.status = "Failed to fetch todos.";
    },
  },
});

export default cardSlice.reducer;
export const { addNewCard, toggleActive, removeCard } = cardSlice.actions;
