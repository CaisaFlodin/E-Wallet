import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getName = createAsyncThunk("getName", async () => {
  let response = await fetch("https://randomuser.me/api/");
  let json = await response.json();

  return json;
});

const nameSlice = createSlice({
  name: "api",
  initialState: {
    cardList2: {},

    status2: null,
  },
  extraReducers: {
    [getName.fulfilled]: (state, { payload }) => {
      state.cardList2 = payload;
      state.status2 = null;
    },
    [getName.pending]: (state) => {
      state.status2 = "Fetching users. Please wait a moment...";
    },
    [getName.rejected]: (state) => {
      state.status2 = "Failed to fetch users.";
    },
  },
});

export default nameSlice.reducer;
