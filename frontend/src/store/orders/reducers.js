import { createSlice  } from "@reduxjs/toolkit";
import {
  fetchOrder,
  fetchDetailOrder,
  deleteOrder,
  addOrder,
  updateOrder,
} from "./actions";
import { notification } from "antd";

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

export const postSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get list post
      .addCase(fetchOrder.pending, (state) => {
        state.list.loading = true;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.list.loading = false;
        state.list.result = action.payload;
        state.list.error = {};
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.list.loading = false;
        state.list.result = {};
        state.list.error = action.error;
      })

      .addCase(fetchDetailOrder.pending, (state) => {
        state.item.loading = true;
        state.item.result = {};
        state.item.error = {};
      })
      .addCase(fetchDetailOrder.fulfilled, (state, action) => {
        state.item.loading = false;
        state.item.result = action.payload;
        state.item.error = {};
      })
      .addCase(fetchDetailOrder.rejected, (state, action) => {
        state.item.loading = false;
        state.item.result = {};
        state.item.error = action.error;
      })

      // delete post
      .addCase(deleteOrder.pending, (state) => {
        state.list.loading = true;
        state.list.error = {};
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.list.loading = false;
        if (action.payload) {
          state.list.result.data = [
            ...state.list.result?.data.filter(
              (item) => item.order_id !== (action.payload)
            ),
          ];

          notification.success({
            message: "Xóa đơn hàng thành công",
          });
        } else {
          notification.error({
            message: "Xóa đơn hàng thất bại",
          });
        }
        state.list.error = {};
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.list.loading = false;
        state.list.error = action.error;
        notification.error({
          message: "Xóa đơn hàng thất bại",
        });
      })

      // add post
      .addCase(addOrder.pending, (state) => {
        state.list.loading = true;
        state.list.error = {};
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.list.loading = false;
        if (action.payload) {
          state.list.result = (action.payload);
          notification.success({
            message: "Thêm đơn hàng thành công",
          });
        } else {
          notification.error({
            message: "Thêm đơn hàng thất bại",
          });
        }
        state.list.error = {};
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.list.loading = false;
        state.list.error = action.error;
        notification.error({
          message: "Thêm đơn hàng thất bại",
        });
      })

      // update post
      .addCase(updateOrder.pending, (state) => {
        state.item.loading = true;
        state.item.error = {};
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        state.item.loading = false;
        if (action.payload) {
          state.list.result.data.forEach((item, index) => {
            if (item.order_id === (action.payload?.id)) {
              state.list.result.data.splice(index, 1, action?.payload?.data);
            }
          })
          notification.success({
            message: "Sửa đơn hàng thành công",
            description: "Bạn đã sửa đơn hàng thành công!",
          });
        } else {
          notification.error({
            message: "Sửa đơn hàng thất bại",
            description: "Bạn đã sửa đơn hàng thất bại!",
          });
        }
        state.item.error = {};
      })
      .addCase(updateOrder.rejected, (state, action) => {
        state.item.loading = false;
        state.item.error = action.error;
        notification.error({
          message: "Sửa đơn hàng thất bại",
          description: "Bạn đã sửa đơn hàng thất bại!",
        });
      });
  },
});

export default postSlice.reducer;
