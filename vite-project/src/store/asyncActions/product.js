import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProductAction = createAsyncThunk('all/products', async () => {
    let res =  await fetch("https://exam-server-5c4e.onrender.com/products/all")
    let data = await res.json()        
    return data
})