import { createSlice } from "@reduxjs/toolkit";
import { getAllCategoriesAction } from "../asyncActions/categorie";

const productsSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    isFetching: false,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategoriesAction.pending, (state, action) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(getAllCategoriesAction.fulfilled, (state, action) => {
        state.isFetching = false;
        state.categories = action.payload;
      })
      .addCase(getAllCategoriesAction.rejected, (state, action) => {
        state.isFetching = false;
        state.error = "Ошибка выполнения запроса";
      });
  },
});

export default productsSlice.reducer;
export const {} = productsSlice.actions;
