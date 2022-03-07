import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getName = createAsyncThunk("getName", async () => {
  let response = await fetch("https://randomuser.me/api/");
  let json = await response.json();
  console.log(json);
  return json;
  //det som returneras här, kommer att bli vår action.payload
});
//kontrollerar och uppdaterar cards state
const nameSlice = createSlice({
  name: "api",
  initialState: {
    cardList2: {},

    status2: null,
  },

  //hanterar vår addNewCard action

  extraReducers: {
    [getName.fulfilled]: (state, action) => {
      state.cardList2 = action.payload;
      state.status2 = null;
    },

    [getName.pending]: (state) => {
      state.status2 = "Fetching todos. Please wait a moment...";
    },
    [getName.rejected]: (state) => {
      state.status2 = "Failed to fetch todos.";
    },
  },
});

export default nameSlice.reducer;
