import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./Reducers/ProductsReducer";
import CategoriesReducer from "./Reducers/CategoriesReducer";

const rootReducer = combineReducers({
  products: ProductsReducer,
  categories: CategoriesReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

