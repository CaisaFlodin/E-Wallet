import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getInfo = createAsyncThunk("todoList/getTodos", async () => {
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
        cardHolderName: "Kenan Akaydın",

        cardNumber: "1111 1111 1556 1111",
        validMonth: "12 /",
        validYear: 23,
        cvc: 123,
        vendor: "blank-bank",
      },
    ],
    activeObj: 1,
    api: [],
    status: null,
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
      state.api = action.payload;
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
