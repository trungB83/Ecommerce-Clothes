import { createSlice } from "@reduxjs/toolkit";
import {
  fetchDeliver,
  deleteDeliver,
  addDeliver,
  updateDeliver,
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

export const deliverSlice = createSlice({
  name: "deliver",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get list deliver
      .addCase(fetchDeliver.pending, (state) => {
        state.list.loading = true;
        state.list.result = {};
        state.list.error = {};
      })
      .addCase(fetchDeliver.fulfilled, (state, action) => {
        state.list.loading = false;
        state.list.result = action.payload;
        state.list.error = {};
      })
      .addCase(fetchDeliver.rejected, (state, action) => {
        state.list.loading = false;
        state.list.result = {};
        state.list.error = action.error;
      })

      // delete deliver
      .addCase(deleteDeliver.pending, (state) => {
        state.list.loading = true;
        state.list.error = {};
      })
      .addCase(deleteDeliver.fulfilled, (state, action) => {
        state.list.loading = false;
        if (action.payload) {
          state.list.result.data = [
            ...state.list.result?.data.filter(
              (item) => item.deliver_id !== (action.payload)
            ),
          ];
          notification.success({
            message: "Xóa đơn vị vận chuyển thành công",
          });
        } else {
          notification.error({
            message: "Xóa đơn vị vận chuyển thất bại",
          });
        }
        state.list.error = {};
      })
      .addCase(deleteDeliver.rejected, (state, action) => {
        state.list.loading = false;
        state.list.error = action.error;
        notification.error({
          message: "Xóa đơn vị vận chuyển thất bại",
        });
      })

      // add deliver
      .addCase(addDeliver.pending, (state) => {
        state.list.loading = true;
        state.list.error = {};
      })
      .addCase(addDeliver.fulfilled, (state, action) => {
        state.list.loading = false;
        if (action.payload) {
          state.list.result?.data.unshift(action.payload);
          notification.success({
            message: "Thêm đơn vị vận chuyển thành công",
          });
        } else {
          notification.error({
            message: "Thêm đơn vị vận chuyển thất bại",
          });
        }
        state.list.error = {};
      })
      .addCase(addDeliver.rejected, (state, action) => {
        state.list.loading = false;
        state.list.error = action.error;
        notification.error({
          message: "Thêm đơn vị vận chuyển thất bại",
        });
      })

      // update deliver
      .addCase(updateDeliver.pending, (state) => {
        state.list.loading = true;
        state.list.error = {};
      })
      .addCase(updateDeliver.fulfilled, (state, action) => {
        state.item.loading = false;
        if (action.payload) {
          state.list.result.data.forEach((item, index) => {
            if (item.deliver_id === (action.payload?.id)) {
              state.list.result.data.splice(index, 1, action?.payload?.data);
            }
          })
          notification.success({
            message: "Sửa phương thức vận chuyển thành công",
          });
        } else {
          notification.error({
            message: "Sửa phương thức vận chuyển thất bại",
          });
        }
        state.item.error = {};
      })
      .addCase(updateDeliver.rejected, (state, action) => {
        state.list.loading = false;
        state.list.error = action.error;
        notification.error({
          message: "Sửa đơn vị vận chuyển thất bại",
        });
      });
  },
});

export default deliverSlice.reducer;
