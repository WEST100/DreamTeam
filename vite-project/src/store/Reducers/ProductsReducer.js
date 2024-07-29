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
    filteredFavoritesProducts: [],
    filteredProductsFromCategory: [],
    cartProducts: [],
    productsFromCategory: [],
  },

  reducers: {
    // вытягиваем продукты в корзину при первой загрузке страницы из LocalStorage если они были ранее туда добавлены
    getProductsFromLocalStorage: (state) => {
      let cartStorage = JSON.parse(localStorage.getItem("cart"));

      if (cartStorage) {
        state.cartProducts = [...cartStorage];
      } else {
        localStorage.setItem("cart", JSON.stringify([]));
      }
    },
    // вытягиваем избранные товары в Favorites при первой загрузке страницы из LocalStorage если они были ранее туда добавлены
    getFavoritesFromLocalStorage: (state) => {
      let favoriteStorage = JSON.parse(localStorage.getItem("favorites"));

      if (favoriteStorage) {
        state.favoritesProducts = [...favoriteStorage];
      } else {
        localStorage.setItem("favorites", JSON.stringify([]));
      }
    },
    // сортировка из выпадающего списка для всех товаров
    sortByPayload(state, action) {
      let data = state.filteredProducts.length > 0 ? state.filteredProducts : state.products;

      if (action.payload.value === "default") {
        state.filteredProducts = data.slice().sort((a, b) => a.id - b.id);
      } else if (action.payload.value === "newest") {
        state.filteredProducts = data.slice().sort((a, b) => b.createdAt - a.createdAt);
      } else if (action.payload.value === "low") {
        state.filteredProducts = data.slice().sort((a, b) => {
          const aDiscontPrice = a.discont_price !== null ? a.discont_price : a.price;
          const bDiscontPrice = b.discont_price !== null ? b.discont_price : b.price;
          return aDiscontPrice - bDiscontPrice;
        });
      } else if (action.payload.value === "high") {
        state.filteredProducts = data.slice().sort((a, b) => {
          const aDiscontPrice = a.discont_price !== null ? a.discont_price : a.price;
          const bDiscontPrice = b.discont_price !== null ? b.discont_price : b.price;
          return bDiscontPrice - aDiscontPrice;
        });
      } else if (action.payload.value === "name") {
        state.filteredProducts = data.slice().sort((a, b) => a.title.localeCompare(b.title));
      }
    },
    // сортировка из выпадающего списка для избранного
    sortByPayloadFromFavorites(state, action) {
      let data = state.filteredFavoritesProducts.length > 0 ? state.filteredFavoritesProducts : state.favoritesProducts;

      if (action.payload.value === "default") {
        state.filteredFavoritesProducts = data.slice().sort((a, b) => a.id - b.id);
      } else if (action.payload.value === "newest") {
        state.filteredFavoritesProducts = data.slice().sort((a, b) => b.createdAt - a.createdAt);
      } else if (action.payload.value === "low") {
        state.filteredFavoritesProducts = data.slice().sort((a, b) => {
          const aDiscontPrice = a.discont_price !== null ? a.discont_price : a.price;
          const bDiscontPrice = b.discont_price !== null ? b.discont_price : b.price;
          return aDiscontPrice - bDiscontPrice;
        });
      } else if (action.payload.value === "high") {
        state.filteredFavoritesProducts = data.slice().sort((a, b) => {
          const aDiscontPrice = a.discont_price !== null ? a.discont_price : a.price;
          const bDiscontPrice = b.discont_price !== null ? b.discont_price : b.price;
          return bDiscontPrice - aDiscontPrice;
        });
      } else if (action.payload.value === "name") {
        state.filteredFavoritesProducts = data.slice().sort((a, b) => a.title.localeCompare(b.title));
      }
    },
    // сортировка из выпадающего списка для категорий
    sortByPayloadFromCategories(state, action) {
      let data = state.filteredProductsFromCategory.length > 0 ? state.filteredProductsFromCategory : state.productsFromCategory;

      if (action.payload.value === "default") {
        state.filteredProductsFromCategory = data.slice().sort((a, b) => a.id - b.id);
      } else if (action.payload.value === "newest") {
        state.filteredProductsFromCategory = data.slice().sort((a, b) => b.createdAt - a.createdAt);
      } else if (action.payload.value === "low") {
        state.filteredProductsFromCategory = data.slice().sort((a, b) => {
          const aDiscontPrice = a.discont_price !== null ? a.discont_price : a.price;
          const bDiscontPrice = b.discont_price !== null ? b.discont_price : b.price;
          return aDiscontPrice - bDiscontPrice;
        });
      } else if (action.payload.value === "high") {
        state.filteredProductsFromCategory = data.slice().sort((a, b) => {
          const aDiscontPrice = a.discont_price !== null ? a.discont_price : a.price;
          const bDiscontPrice = b.discont_price !== null ? b.discont_price : b.price;
          return bDiscontPrice - aDiscontPrice;
        });
      } else if (action.payload.value === "name") {
        state.filteredProductsFromCategory = data.slice().sort((a, b) => a.title.localeCompare(b.title));
      }
    },
    // сортировка по нажатию на checkBox для всех товаров
    sortByCheckBox(state, action) {
      let data = state.filteredProducts.length > 0 ? state.filteredProducts : state.products;

      state.filteredProducts = action.payload.value ? data.filter((item) => item.discont_price) : [];
    },
    // сортировка по нажатию на checkBox для товаров из категорий
    sortByCheckBoxFromCategories(state, action) {
      let data = state.filteredProductsFromCategory.length > 0 ? state.filteredProductsFromCategory : state.productsFromCategory;

      state.filteredProductsFromCategory = action.payload.value ? data.filter((item) => item.discont_price) : [];
    },
    // сортировка от Мин цены до Макс цены. для всех товаров
    sortByMinMax(state, { payload }) {
      let maxValue = !payload.max && payload.max === "" ? Infinity : +payload.max;
      let minValue = !payload.min && payload.min === "" ? 0 : +payload.min;

      let data = state.filteredProducts.length > 0 ? state.filteredProducts : state.products;

      state.filteredProducts = data.filter((item) => {
        const price = item.discont_price !== null ? item.discont_price : item.price;
        return price >= minValue && price <= maxValue;
      });
    },
    // сортировка от Мин цены до Макс цены. для избранного
    sortByMinMaxFromFavorites(state, { payload }) {
      let maxValue = payload.max === "" ? Infinity : +payload.max;
      let minValue = payload.min === "" ? 0 : +payload.min;

      console.log("minValue:", minValue);
      console.log("maxValue:", maxValue);
      console.log("Filtered Data:", state.filteredFavoritesProducts);

      let data = state.filteredFavoritesProducts.length > 0 ? state.filteredFavoritesProducts : state.favoritesProducts;

      state.filteredFavoritesProducts = data.filter((item) => {
        const price = item.discont_price !== null ? item.discont_price : item.price;
        return price >= minValue && price <= maxValue;
      });
    },
    // сортировка от Мин цены до Макс цены. для всех товаров из категорий
    sortByMinMaxFromCategories(state, { payload }) {
      let maxValue = payload.max === "" ? Infinity : +payload.max;
      let minValue = payload.min === "" ? 0 : +payload.min;

      let data = state.filteredProductsFromCategory.length > 0 ? state.filteredProductsFromCategory : state.productsFromCategory;

      console.log("minValue:", minValue);
      console.log("maxValue:", maxValue);
      console.log("Filtered Data:", state.filteredProductsFromCategory);

      // Проверяем валидность диапазона и фильтруем 
      if (minValue > maxValue) {
        // Если диапазон невалиден, очищаем результат фильтрации, но при этом массив заполнится продуктами из категории, надо думать над условием
        state.filteredProductsFromCategory = [];
        // state.productsFromCategory = [];
        console.log("Filtered Data:", state.filteredProductsFromCategory);
      } else {
        state.filteredProductsFromCategory = data.filter((item) => {
          const price = item.discont_price !== null ? item.discont_price : item.price;
          return price >= minValue && price <= maxValue;
        });
      }
      console.log("Filtered Data:", state.filteredProductsFromCategory);
    },

    // Добавление товаров в корзину
    addProductToCart: (state, { payload }) => {
      let foundProduct = state.cartProducts.find((item) => item.id === payload.id);

      if (!foundProduct) {
        state.cartProducts.push({ ...payload, count: 1 });

        localStorage.setItem("cart", JSON.stringify(state.cartProducts));
      }
    },
    // Добавление избранных товаров
    addFavoritesProducts: (state, { payload }) => {
      let foundProduct = state.favoritesProducts.find((item) => item === payload);

      if (!foundProduct) {
        state.favoritesProducts.push(payload);

        localStorage.setItem("favorites", JSON.stringify(state.favoritesProducts));
      } else {
        state.favoritesProducts = state.favoritesProducts.filter((item) => item !== payload);
        localStorage.setItem("favorites", JSON.stringify(state.favoritesProducts));
      }
    },
    // уменьшение кол-ва товаров
    incrementProduct: (state, { payload }) => {
      state.cartProducts = state.cartProducts.map((item) => {
        if (item.id === payload) {
          item.count += 1;
        }

        return item;
      });

      localStorage.setItem("cart", JSON.stringify(state.cartProducts));
    },
    // увеличение кол-ва товаров
    decrementProduct: (state, { payload }) => {
      state.cartProducts = state.cartProducts
        .map((item) => {
          if (item.id === payload) {
            item.count -= 1;

            if (item.count === 0) {
              return null;
            }
          }

          return item;
        })
        .filter((item) => item);

      localStorage.setItem("cart", JSON.stringify(state.cartProducts));
    },
    // удаление из корзины
    removeProductFromCart: (state, { payload }) => {
      state.cartProducts = state.cartProducts.filter((item) => item.id !== payload.id);

      localStorage.setItem("cart", JSON.stringify(state.cartProducts));
    },
    // удаление из избранного
    removeProductFromFavorites: (state, { payload }) => {
      state.favoritesProducts = state.favoritesProducts.filter((item) => item.id !== payload.id);

      localStorage.setItem("favorites", JSON.stringify(state.favoritesProducts));
    },
    // добавление товара из 1daydiscount
    addProductFromOneDayDiscount: (state, { payload }) => {
      const { title, price, description, image, createdAt, updatedAt, categoryId } = payload;
      const maxId = Math.max(...state.products.map((el) => el.id)) + 1;
      const newProduct = {
        id: maxId < 0 ? 1 : maxId,
        title,
        price,
        discont_price: price / 2,
        count: 1,
        description,
        image,
        createdAt,
        updatedAt,
        categoryId,
      };

      state.cartProducts = [...state.cartProducts, newProduct];
      state.products = [...state.products, newProduct];

      localStorage.setItem("cart", JSON.stringify(state.cartProducts));
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
        state.productsFromCategory = action.payload.data;
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
export const { sortByPayload, sortByCheckBox, sortByMinMax, addFavoritesProducts, addProductToCart, getProductsFromLocalStorage, getFavoritesFromLocalStorage, incrementProduct, decrementProduct, removeProductFromCart, removeProductFromFavorites, sortByPayloadFromFavorites, sortByMinMaxFromFavorites, sortByPayloadFromCategories, sortByCheckBoxFromCategories, sortByMinMaxFromCategories, addProductFromOneDayDiscount } = productsSlice.actions;
