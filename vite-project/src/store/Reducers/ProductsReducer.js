import { createSlice } from "@reduxjs/toolkit";
import { getAllProductAction, getCategoriesProductsAction, getProductsCardDetailAction } from "../asyncActions/product";
import { useState } from "react";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
    error: null,
    product: null,
    favoritesProducts: [],
    cartProducts: [],
    isToggle: true,
    itemsWithDiscont: [],
    itemsWithOutDiscont: [],
  },

  reducers: {
    sortByPayload(state, action) {
      if (action.payload === "default") {
        return {
          ...state,
          products: state.products.slice().sort((a, b) => a.id - b.id),
        };
      } else if (action.payload === "newest") {
        return {
          ...state,
          products: state.products.slice().sort((a, b) => b.createdAt - a.createdAt),
        };
      } else if (action.payload === "low") {
        return {
          ...state,
          products: state.products.slice().sort((a, b) => a.price - b.price),
        };
      } else if (action.payload === "high") {
        return {
          ...state,
          products: state.products.slice().sort((a, b) => b.price - a.price),
        };
      }
    },
    sortByCheckBox(state) {
      // let itemsWithDiscont = state.products.filter((item) => item.discont_price);
      // console.log(itemsWithDiscont);
      // let itemsWithOutDiscont = state.products.filter((item) => item.discont_price === null);
      // console.log(itemsWithOutDiscont);

      // state.itemsWithDiscont = state.products.filter((item) => item.discont_price);
      // console.log(itemsWithDiscont);
      // state.itemsWithOutDiscont = state.products.filter((item) => item.discont_price === null);
      // console.log(itemsWithOutDiscont);

      // let isToggle = true;
      // if (isToggle) {
      //   isToggle = false;
      //   console.log(isToggle);
      //   return { ...state, products: state.products.filter((item) => item.discont_price) };
      // } else {
      //   isToggle = true;
      //   console.log(isToggle);
      //   return { ...state, products: state.products.filter((item) => item.discont_price === null) };
      // }

      // if (state.isToggle) {
      //   state.isToggle = false;
      //   console.log(state.isToggle);
      //   return { ...state, products: state.products.filter((item) => item.discont_price) };
      // } else {
      //   state.isToggle = true;
      //   console.log(state.isToggle);
      //   return { ...state, products: state.products.filter((item) => item.discont_price === null) };
      // }

      // const [isDiscounted, setIsDiscounted] = useState(true);
      // const checkDiscountItems = () => {
      //   setIsDiscounted(!isDiscounted);
      // };
      // if (isDiscounted) {
      //   checkDiscountItems();
      //   return { ...state, products: state.products.filter((item) => item.discont_price) };
      // } else {
      //   checkDiscountItems();
      //   return { ...state, products: state.products.filter((item) => item.discont_price === null) };
      // }

      state.products = state.products.filter((item) => item.discont_price);
    },
    sortByMinMax(state, action) {
      action.payload.max = action.payload.max == "" ? Infinity : +action.payload.max;
      action.payload.min = action.payload.min == "" ? 0 : +action.payload.min;
      return {
        ...state,
        products: state.products.map((elem) => {
          if (elem.price >= action.payload.min && elem.price <= action.payload.max) {
            elem.isShow = true; // ?????????
          } else {
            elem.isShow = false;
          }
          return elem;
        }),
      };
    },
    addFavoritesProducts(state, action) {
      state.favoritesProducts = action.payload;
    },
    addCartProducts(state, action) {
      state.cartProducts = action.payload;
    },
  },
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
export const { sortByPayload, sortByCheckBox, sortByMinMax, addFavoritesProducts, addCartProducts } = productsSlice.actions;
