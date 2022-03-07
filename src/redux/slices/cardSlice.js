import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getInfo = createAsyncThunk("cardList", async () => {
  let response = await fetch("https://randomuser.me/api/");
  let json = await response.json();

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
    addNewCard: (state, { payload }) => {
      const newCard = {
        cardNumber: payload.cardNumber,
        cardHolderFirst: payload.cardHolderFirst,
        cardHolderLast: payload.cardHolderLast,
        validMonth: payload.validMonth,
        validYear: payload.validYear,
        cvc: payload.cvc,
        vendor: payload.vendor,
        id: Date.now(),
        isActive: false,
      };

      state.cardList = [...state.cardList, newCard];
    },

    toggleActive: (state, { payload }) => {
      const index = state.cardList.findIndex((card) => card.id === payload.id);

      state.activeObj = state.cardList[index].id;
    },
    removeCard: (state, { payload }) => {
      const { id } = payload;
      state.cardList = state.cardList.filter((card) => card.id !== id);
    },
  },
  extraReducers: {
    [getInfo.fulfilled]: (state, { payload }) => {
      state.cardList[0].cardHolderFirst = payload.results[0].name.first;
      state.cardList[0].cardHolderLast = payload.results[0].name.last;
      state.status = null;
    },
    [getInfo.pending]: (state) => {
      state.status = "Fetching users. Please wait a moment...";
    },
    [getInfo.rejected]: (state) => {
      state.status = "Failed to fetch users.";
    },
  },
});

export default cardSlice.reducer;
export const { addNewCard, toggleActive, removeCard } = cardSlice.actions;
