import { createSlice } from "@reduxjs/toolkit";
import {
  fetchOrderItem,
  deleteOrderItem,
  addOrderItem,
  updateOrderItem,
} from "./actions";

const initialState = {
  item: {
    loading: false,
    result: {},
    error: {},
  },
  list: {
    loading: false,
    result: {},
    error: {},
  },
};

export const orderSlice = createSlice({
  name: "order_items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get list order
      .addCase(fetchOrderItem.pending, (state) => {
        state.list.loading = true;
        state.list.result = {};
        state.list.error = {};
      })
      .addCase(fetchOrderItem.fulfilled, (state, action) => {
        state.list.loading = false;
        state.list.result = action.payload;
        state.list.error = {};
      })
      .addCase(fetchOrderItem.rejected, (state, action) => {
        state.list.loading = false;
        state.list.result = {};
        state.list.error = action.error;
      })

      // delete order
      .addCase(deleteOrderItem.pending, (state) => {
        state.list.loading = true;
        state.list.error = {};
      })
      .addCase(deleteOrderItem.fulfilled, (state, action) => {
        state.list.loading = false;
        if (action.payload) {
          state.list.result.data = [
            ...state.list.result?.data.filter(
              (item) => item.order_item_id !== (action.payload)
            ),
          ];
        } else {
          return
        }
        state.list.error = {};
      })
      .addCase(deleteOrderItem.rejected, (state, action) => {
        state.list.loading = false;
        state.list.error = action.error;
      })

      // add order
      .addCase(addOrderItem.pending, (state) => {
        state.list.loading = true;
        state.list.error = {};
      })
      .addCase(addOrderItem.fulfilled, (state, action) => {
        state.list.loading = false;
        if (action.payload) {
          state.list.result?.data.unshift(action.payload);
        } else {
          return
        }
        state.list.error = {};
      })
      .addCase(addOrderItem.rejected, (state, action) => {
        state.list.loading = false;
        state.list.error = action.error;
      })

      // update order
      .addCase(updateOrderItem.pending, (state) => {
        state.list.loading = true;
        state.list.error = {};
      })
      .addCase(updateOrderItem.fulfilled, (state, action) => {
        state.item.loading = false;
        if (action.payload) {
          state.list.result.data.forEach((item, index) => {
            if (item.order_item_id === (action.payload?.id)) {
              state.list.result.data.splice(index, 1, action?.payload?.data);
            }
          })
        } else {
        }
        state.item.error = {};
      })
      .addCase(updateOrderItem.rejected, (state, action) => {
        state.list.loading = false;
        state.list.error = action.error;
      });
  },
});

export default orderSlice.reducer;
