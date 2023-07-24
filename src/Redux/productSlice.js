import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: [],
  status: "idle",
  error: null,
};

// GET product
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const response = await axios.get(
      "https://api-test.innoloft.com/product/6781/"
    );

    return response.data;
  }
);

// PUT product
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (product) => {
    try {
      await axios.put("https://api-test.innoloft.com/product/6781/", product); // Make the PUT request
      localStorage.setItem("product", JSON.stringify(product)); // Save to local storage
      return product; // Return the updated product to update the Redux store
    } catch (error) {
      console.error("Error updating product:", error);
      throw error;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.product = action.payload;
      });
  },
});

export default productSlice.reducer;
