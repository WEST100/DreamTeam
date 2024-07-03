import { createSlice } from "@reduxjs/toolkit";
import { getAllCategoriesAction, getCategoriesTitleAction } from "../asyncActions/categorie";

const productsSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    isLoading: false,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategoriesAction.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllCategoriesAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(getAllCategoriesAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Request execution error";
      })
      .addCase(getCategoriesTitleAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload.category;
      });
  },
});

export default productsSlice.reducer;
export const {} = productsSlice.actions;
