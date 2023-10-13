import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice.js";
import trlReducer from "./trlSlice.js";
import configReducer from "./configSlice.js";

export const store = configureStore({
  reducer: {
    product: productReducer,
    trl: trlReducer,
    config: configReducer,
  },
});

export default store;
