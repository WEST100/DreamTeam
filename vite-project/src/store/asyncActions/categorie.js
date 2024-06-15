import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCategoriesAction = createAsyncThunk("all/categories", async () => {
  let res = await fetch("https://exam-server-5c4e.onrender.com/categories/all");
  let data = await res.json();
  return data;
});
