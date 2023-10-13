import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const appId = import.meta.env.VITE_APP_ID || "1";

export const fetchConfig = createAsyncThunk("config/fetchConfig", async () => {
  // Remove the parameter here since we will use the appId from outer scope
  const response = await axios.get(
    `https://api-test.innoloft.com/configuration/${appId}/`
  );
  return response.data;
});

const configSlice = createSlice({
  name: "config",
  initialState: {
    config: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchConfig.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchConfig.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.config = action.payload;
    });
    builder.addCase(fetchConfig.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default configSlice.reducer;
