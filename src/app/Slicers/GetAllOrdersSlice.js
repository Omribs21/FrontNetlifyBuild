import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetOrders } from "../API/GetOrdersAPI";
const initialState = {
    Orders: [],
    all_orders :[]
};

export const GetOrdersAsync = createAsyncThunk(
    "getorders/GetOrders",
    async (payload) => {
      console.log(payload)
      const response = await GetOrders(payload);
      console.log(response.data)
      return response.data;
    }
);
  
  export const GetOrdersSlice = createSlice({
    name: "getorders",
    initialState,
    reducers: {
    extraReducers: (builder) => {
      builder.addCase(GetOrdersAsync.fulfilled, (state, action) => {
        console.log("first")
        console.log(action.payload)
        state.all_orders = action.payload
      });
    }}
  });
  
export const selectAllOrders = (state) => state.getorders.all_orders;
export default GetOrdersSlice.reducer;