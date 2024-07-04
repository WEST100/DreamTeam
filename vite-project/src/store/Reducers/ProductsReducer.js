import { createSlice } from "@reduxjs/toolkit";
import { getAllProductAction, getCategoriesProductsAction, getProductsCardDetailAction } from "../asyncActions/product";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
    error: null,
    product: null
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductAction.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllProductAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getAllProductAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Request execution error";
      })
      .addCase(getCategoriesProductsAction.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCategoriesProductsAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.data;
      })
      .addCase(getCategoriesProductsAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Request execution error";
      })
      .addCase(getProductsCardDetailAction.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProductsCardDetailAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(getProductsCardDetailAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Request execution error";
      });
  },
});

export default productsSlice.reducer;
export const {} = productsSlice.actions;
