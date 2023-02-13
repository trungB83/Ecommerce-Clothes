import { createSlice } from "@reduxjs/toolkit"
import { fetchPayment, deletePayment, addPayment, updatePayment } from "./actions"
import { notification } from "antd"

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
}

export const paymentSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // get list payment
      .addCase(fetchPayment.pending, state => {
        state.list.loading = true
        state.list.result = {}
        state.list.error = {}
      })
      .addCase(fetchPayment.fulfilled, (state, action) => {
        state.list.loading = false
        state.list.result = action.payload
        state.list.error = {}
      })
      .addCase(fetchPayment.rejected, (state, action) => {
        state.list.loading = false
        state.list.result = {}
        state.list.error = action.error
      })

      // delete payment
      .addCase(deletePayment.pending, state => {
        state.list.loading = true
        state.list.error = {}
      })
      .addCase(deletePayment.fulfilled, (state, action) => {
        state.list.loading = false
        if (action.payload) {
          state.list.result.data = [
            ...state.list.result?.data.filter(
              (item) => item.payment_id !== (action.payload)
            ),
          ];
          notification.success({
            message: "Xóa phương thức thanh toán thành công",
          })
        } else {
          notification.error({
            message: "Xóa phương thức thanh toán thất bại",
          })
        }
        state.list.error = {}
      })
      .addCase(deletePayment.rejected, (state, action) => {
        state.list.loading = false
        state.list.error = action.error
        notification.error({
          message: "Xóa phương thức thanh toán thất bại",
        })
      })

      // add payment
      .addCase(addPayment.pending, state => {
        state.list.loading = true
        state.list.error = {}
      })
      .addCase(addPayment.fulfilled, (state, action) => {
        state.list.loading = false
        if (action.payload) {
          state.list.result?.data.unshift(action.payload);
          notification.success({
            message: "Thêm phương thức thanh toán thành công",
          })
        } else {
          notification.error({
            message: "Thêm phương thức thanh toán thất bại",
          })
        }
        state.list.error = {}
      })
      .addCase(addPayment.rejected, (state, action) => {
        state.list.loading = false
        state.list.error = action.error
        notification.error({
          message: "Thêm phương thức thanh toán thất bại",
        })
      })

      // update payment
      .addCase(updatePayment.pending, state => {
        state.list.loading = true
        state.list.error = {}
      })
      .addCase(updatePayment.fulfilled, (state, action) => {
        state.item.loading = false;
        if (action.payload) {
          state.list.result.data.forEach((item, index) => {
            if (item.payment_id === (action.payload?.id)) {
              state.list.result.data.splice(index, 1, action?.payload?.data);
            }
          })
          notification.success({
            message: "Sửa phương thức thanh toán thành công",
          });
        } else {
          notification.error({
            message: "Sửa phương thức thanh toán thất bại",
          });
        }
        state.item.error = {};
      })
      .addCase(updatePayment.rejected, (state, action) => {
        state.list.loading = false
        state.list.error = action.error
        notification.error({
          message: "Sửa phương thức thanh toán thất bại",
        })
      })
  }
})

export default paymentSlice.reducer
