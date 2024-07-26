import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProductAction = createAsyncThunk('all/products', async () => {
    let res =  await fetch("https://exam-server-5c4e.onrender.com/products/all")
    let data = await res.json()
    return data
})

export const getCategoriesProductsAction = createAsyncThunk("categories/products", async (id) => {
  let res = await fetch(`https://exam-server-5c4e.onrender.com/categories/${id}`);
  let data = await res.json();
  return data;
});

export const getProductsCardDetailAction = createAsyncThunk("products/product", async (id) => {
  let res = await fetch(`https://exam-server-5c4e.onrender.com/products/${id}`);
  let data = await res.json();
  return data[0];
});