import { createSlice } from "@reduxjs/toolkit"
import { fetchProductCates, deleteProductCate, addProductCate, updateProductCate, fetchSingleProductCate } from "./actions"
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

export const productCateSlice = createSlice({
  name: "product-cates",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // get list ProductCate
      .addCase(fetchProductCates.pending, state => {
        state.list.loading = true
        state.list.result = {}
        state.list.error = {}
      })
      .addCase(fetchProductCates.fulfilled, (state, action) => {
        state.list.loading = false
        state.list.result = action.payload
        state.list.error = {}
      })
      .addCase(fetchProductCates.rejected, (state, action) => {
        state.list.loading = false
        state.list.result = {}
        state.list.error = action.error
      })
      .addCase(fetchSingleProductCate.pending, state => {
        state.item.loading = true
        state.item.result = {}
        state.item.error = {}
      })
      .addCase(fetchSingleProductCate.fulfilled, (state, action) => {
        state.item.loading = false
        state.item.result = action.payload
        state.item.error = {}
      })
      .addCase(fetchSingleProductCate.rejected, (state, action) => {
        state.item.loading = false
        state.item.result = {}
        state.item.error = action.error
      })

      // delete ProductCate
      .addCase(deleteProductCate.pending, state => {
        state.list.loading = true
        state.list.error = {}
      })
      .addCase(deleteProductCate.fulfilled, (state, action) => {
        state.list.loading = false
        if (action.payload) {
          state.list.result.data = [
            ...state.list.result?.data.filter(
              (item) => item.product_cate_id !== (action.payload)
            ),
          ];
          notification.success({
            message: "Xóa danh mục thành công",
          })
        } else {
          notification.error({
            message: "Xóa danh mục thất bại11",
          })
        }
        state.list.error = {}
      })
      .addCase(deleteProductCate.rejected, (state, action) => {
        state.list.loading = false
        state.list.error = action.error
        notification.error({
          message: "Xóa danh mục thất bại11",
        })
      })

      // add ProductCate
      .addCase(addProductCate.pending, state => {
        state.list.loading = true
        state.list.error = {}
      })
      .addCase(addProductCate.fulfilled, (state, action) => {
        state.list.loading = false
        if (action.payload) {
          state.list.result?.data.unshift(action.payload);
          notification.success({
            message: "Thêm danh mục thành công",
          })
        } else {
          notification.error({
            message: "Thêm danh mục thất bại",
          })
        }
        state.list.error = {}
      })
      .addCase(addProductCate.rejected, (state, action) => {
        state.list.loading = false
        state.list.error = action.error
        notification.error({
          message: "Thêm danh mục thất bại",
        })
      })

      // update ProductCate
      .addCase(updateProductCate.pending, state => {
        state.list.loading = true
        state.list.error = {}
      })
      .addCase(updateProductCate.fulfilled, (state, action) => {
        state.item.loading = false;
        if (action.payload) {
          state.list.result.data.forEach((item, index) => {
            if (item.product_cate_id === (action.payload?.id)) {
              state.list.result.data.splice(index, 1, action?.payload?.data);
            }
          })
          notification.success({
            message: "Sửa danh mục sản phẩm thành công",
          });
        } else {
          notification.error({
            message: "Sửa danh mục sản phẩm thất bại",
          });
        }
        state.item.error = {};
      })
      .addCase(updateProductCate.rejected, (state, action) => {
        state.list.loading = false
        state.list.error = action.error
        notification.error({
          message: "Sửa danh mục thất bại",
          description: "Bạn đã sửa danh mục thất bại!"
        })
      })
  }
})

export default productCateSlice.reducer
