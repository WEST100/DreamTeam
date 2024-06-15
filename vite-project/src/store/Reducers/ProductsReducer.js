import { createSlice } from "@reduxjs/toolkit";
import { getAllProductAction } from "../asyncActions/product";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isFetching: false,
    error: null,
  },

  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductAction.pending, (state, action) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(getAllProductAction.fulfilled, (state, action) => {
        state.isFetching = false;
        state.products = action.payload
      })
      .addCase(getAllProductAction.rejected, (state, action) => {
        state.isFetching = false;
        state.error = 'Ошибка выполнения запроса'
      });
  }
});

export default productsSlice.reducer;
export const {} = productsSlice.actions;
