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
        // location: {
        //   street: {
        //     number: 872,
        //     name: "Atatürk Sk",
        //   },
        //   city: "Siirt",
        //   state: "Erzurum",
        //   country: "Turkey",
        //   postcode: 68316,
        //   coordinates: {
        //     latitude: "75.5309",
        //     longitude: "-16.4361",
        //   },
        //   timezone: {
        //     offset: "-7:00",
        //     description: "Mountain Time (US & Canada)",
        //   },
        // },
        // email: "kenan.akaydin@example.com",
        login: {
          uuid: "80310b4a-83dc-4f47-a6db-3b33b21c23f2",
          username: "ticklishpanda313",
          password: "heinrich",
          salt: "Hp1W0rDO",
          md5: "8d8e303133188165adbaf020103c9a08",
          sha1: "d67478decc5fe8691087e80a4c679aceeaa1b415",
          sha256:
            "cb9b291a3ee574873cb5c515f7e2d2a9e08ef70d475bd95657d1cc08f14688f7",
        },
        cardNumber: 1111111115561,
        validMonth: 12,
        validYear: 23,
        cvc: 123,
        vendor: "blank-bank",
      },
    ],
    activeObj: 1,
    api: [],
    status: null,
  },
  //     {
  //       cardNumber: "1234 5678 1234 5678",
  //       cardHolderName: "Kalle Anka",
  //       validMonth: "12 /",
  //       validYear: "22",
  //       cvc: 123,
  //       id: 1,
  //       isActive: true,
  //       vendor: "blank-bank",
  //       id2: 2,
  //     },
  //   ],
  //   activeObj: 1,
  // },
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
