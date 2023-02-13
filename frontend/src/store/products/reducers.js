import { createSlice, current  } from "@reduxjs/toolkit";
import {
  fetchProducts,
  fetchDetailProduct,
  deleteProduct,
  addProduct,
  updateProduct,
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

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get list product
      .addCase(fetchProducts.pending, (state) => {
        state.list.loading = true;
        state.list.result = {};
        state.list.error = {};
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.list.loading = false;
        state.list.result = action.payload;
        state.list.error = {};
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.list.loading = false;
        state.list.result = {};
        state.list.error = action.error;
      })

      .addCase(fetchDetailProduct.pending, (state) => {
        state.item.loading = true;
        state.item.result = {};
        state.item.error = {};
      })
      .addCase(fetchDetailProduct.fulfilled, (state, action) => {
        state.item.loading = false;
        state.item.result = action.payload;
        state.item.error = {};
      })
      .addCase(fetchDetailProduct.rejected, (state, action) => {
        state.item.loading = false;
        state.item.result = {};
        state.item.error = action.error;
      })

      // delete product
      .addCase(deleteProduct.pending, (state) => {
        state.list.loading = true;
        state.list.error = {};
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.list.loading = false;
        if (action.payload) {
          state.list.result.data = [
            ...state.list.result?.data.filter(
              (item) => item.product_id !== (action.payload)
            ),
          ];
          notification.success({
            message: "Xóa sản phẩm thành công",
          });
        } else {
          notification.error({
            message: "Xóa sản phẩm thất bại",
          });
        }
        state.list.error = {};
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.list.loading = false;
        state.list.error = action.error;
        notification.error({
          message: "Xóa sản phẩm thất bại",
        });
      })

      // add product
      .addCase(addProduct.pending, (state) => {
        state.list.loading = true;
        state.list.error = {};
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.list.loading = false;
        if (action.payload) {
          state.list.result?.data.unshift(action.payload);
          notification.success({
            message: "Thêm sản phẩm thành công",
          });
        } else {
          notification.error({
            message: "Thêm sản phẩm thất bại",
          });
        }
        state.list.error = {};
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.list.loading = false;
        state.list.error = action.error;
        notification.error({
          message: "Thêm sản phẩm thất bại",
        });
      })

      // update product
      .addCase(updateProduct.pending, (state) => {
        state.item.loading = true;
        state.item.error = {};
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.item.loading = false;
        if (action.payload) {
          state.item.result = action.payload
          notification.success({
            message: "Sửa sản phẩm thành công",
          });
        } else {
          notification.error({
            message: "Sửa sản phẩm thất bại",
          });
        }
        state.item.error = {};
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.item.loading = false;
        state.item.error = action.error;
        notification.error({
          message: "Sửa sản phẩm thất bại",
        });
      });
  },
});

export default productSlice.reducer;