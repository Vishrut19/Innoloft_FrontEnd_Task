import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  trl: [],
  status: "idle",
  error: null,
};

export const fetchTRL = createAsyncThunk("trl/fetchTRL", async () => {
  try {
    const response = await axios.get("https://api-test.innoloft.com/trl/");
    return response.data;
  } catch (error) {
    console.error("Error Loading TRL", error);
    throw error;
  }
});

const trlSlice = createSlice({
  name: "trl",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTRL.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTRL.fulfilled, (state, action) => {
        state.trl = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchTRL.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default trlSlice.reducer;
