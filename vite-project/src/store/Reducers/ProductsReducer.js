import { createSlice } from "@reduxjs/toolkit";
import { getAllProductAction, getCategoriesProductsAction, getProductsCardDetailAction } from "../asyncActions/product";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filteredProducts: [],
    isLoading: false,
    error: null,
    product: null,
    favoritesProducts: [],
    cartProducts: [],
  },

  reducers: {
    // сортировка из выпадающего списка
    sortByPayload(state, action) {
      let data = state.filteredProducts.length > 0 ? state.filteredProducts : state.products;

      if (action.payload === "default") {
        state.filteredProducts = data.slice().sort((a, b) => a.id - b.id);
      } else if (action.payload === "newest") {
        state.filteredProducts = data.slice().sort((a, b) => b.createdAt - a.createdAt);
      } else if (action.payload === "low") {
        state.filteredProducts = data.slice().sort((a, b) => a.price - b.price);
      } else if (action.payload === "high") {
        state.filteredProducts = data.slice().sort((a, b) => b.price - a.price);
      }
    },
    // сортировка по нажатию на checkBox
    sortByCheckBox(state, action) {
      let data = state.filteredProducts.length > 0 ? state.filteredProducts : state.products;

      let prevState = action.payload === false ? state.filteredProducts : []; // ?????? как запомнить PrevState

      state.filteredProducts = action.payload ? data.filter((item) => item.discont_price) : [];
    },
    // сортировка от Мин цены до Макс цены.
    sortByMinMax(state, { payload }) {
      let maxValue = payload.max === "" ? Infinity : +payload.max;
      let minValue = payload.min === "" ? 0 : +payload.min;

      let data = state.filteredProducts.length > 0 ? state.filteredProducts : state.products;

      state.filteredProducts = data.filter((item) => item.price >= minValue && item.price <= maxValue);
    },
    // Добавление избранных товаров
    addFavoritesProducts(state, action) {
      state.favoritesProducts.push(action.payload);

      let localFavorites = JSON.parse(localStorage.getItem("favorites"));
      let currentProduct = state.products.find((item) => item.id === action.payload.id);

      if (localFavorites) {
        let foundProduct = localFavorites.find((item) => item.id === action.payload.id);

        if (foundProduct) {
          localFavorites = localFavorites.map((item) => {
            if (item.id === action.payload.id) {
              item.count = item.count + 1;
            }
            return item;
          });
          localStorage.setItem("favorites", JSON.stringify(localFavorites));
        } else {
          currentProduct.count = 1;
          localFavorites.push(currentProduct);
          localStorage.setItem("favorites", JSON.stringify(localFavorites));
        }
      } else {
        let cartItems = [];

        currentProduct.count = 1;
        cartItems.push(currentProduct);

        localStorage.setItem("favorites", JSON.stringify(cartItems));
      }
    },
    // Добавление товаров в корзину
    addCartProducts(state, action) {
      state.cartProducts.push(action.payload);

      let localCart = JSON.parse(localStorage.getItem("cart"));
      let currentProduct = state.products.find((item) => item.id === action.payload.id);

      if (localCart) {
        let foundProduct = localCart.find((item) => item.id === action.payload.id);

        if (foundProduct) {
          localCart = localCart.map((item) => {
            if (item.id === action.payload.id) {
              item.count = item.count + 1;
            }
            return item;
          });
          localStorage.setItem("cart", JSON.stringify(localCart));
        } else {
          currentProduct.count = 1;
          localCart.push(currentProduct);
          localStorage.setItem("cart", JSON.stringify(localCart));
        }
      } else {
        let cartItems = [];

        currentProduct.count = 1;
        cartItems.push(currentProduct);

        localStorage.setItem("cart", JSON.stringify(cartItems));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // получение всех продуктов
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
      // получение продуктов из категории
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
      // получение одного продукта
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
