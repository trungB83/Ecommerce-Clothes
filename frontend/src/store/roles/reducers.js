import { createSlice } from "@reduxjs/toolkit"
import { fetchRoles, deleteRole, addRole, updateRole, fetchSingleRole } from "./actions"
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

export const roleSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // get list Role
      .addCase(fetchRoles.pending, state => {
        state.list.loading = true
        state.list.result = {}
        state.list.error = {}
      })
      .addCase(fetchRoles.fulfilled, (state, action) => {
        state.list.loading = false
        state.list.result = action.payload
        state.list.error = {}
      })
      .addCase(fetchRoles.rejected, (state, action) => {
        state.list.loading = false
        state.list.result = {}
        state.list.error = action.error
      })
      .addCase(fetchSingleRole.pending, state => {
        state.item.loading = true
        state.item.result = {}
        state.item.error = {}
      })
      .addCase(fetchSingleRole.fulfilled, (state, action) => {
        state.item.loading = false
        state.item.result = action.payload
        state.item.error = {}
      })
      .addCase(fetchSingleRole.rejected, (state, action) => {
        state.item.loading = false
        state.item.result = {}
        state.item.error = action.error
      })

      // delete Role
      .addCase(deleteRole.pending, state => {
        state.list.loading = true
        state.list.error = {}
      })
      .addCase(deleteRole.fulfilled, (state, action) => {
        state.list.loading = false
        if (action.payload) {
          state.list.result.data = [
            ...state.list.result?.data.filter(
              (item) => item.product_cate_id !== (action.payload)
            ),
          ];
          notification.success({
            message: "Xóa vai trò thành công",
          })
        } else {
          notification.error({
            message: "Xóa vai trò thất bại11",
          })
        }
        state.list.error = {}
      })
      .addCase(deleteRole.rejected, (state, action) => {
        state.list.loading = false
        state.list.error = action.error
        notification.error({
          message: "Xóa vai trò thất bại11",
        })
      })

      // add Role
      .addCase(addRole.pending, state => {
        state.list.loading = true
        state.list.error = {}
      })
      .addCase(addRole.fulfilled, (state, action) => {
        state.list.loading = false
        if (action.payload) {
          state.list.result?.data.unshift(action.payload);
          notification.success({
            message: "Thêm vai trò thành công",
          })
        } else {
          notification.error({
            message: "Thêm vai trò thất bại",
          })
        }
        state.list.error = {}
      })
      .addCase(addRole.rejected, (state, action) => {
        state.list.loading = false
        state.list.error = action.error
        notification.error({
          message: "Thêm vai trò thất bại",
        })
      })

      // update Role
      .addCase(updateRole.pending, state => {
        state.list.loading = true
        state.list.error = {}
      })
      .addCase(updateRole.fulfilled, (state, action) => {
        state.item.loading = false;
        if (action.payload) {
          state.list.result.data.forEach((item, index) => {
            if (item.product_cate_id === (action.payload?.id)) {
              state.list.result.data.splice(index, 1, action?.payload?.data);
            }
          })
          notification.success({
            message: "Sửa vai trò sản phẩm thành công",
          });
        } else {
          notification.error({
            message: "Sửa vai trò sản phẩm thất bại",
          });
        }
        state.item.error = {};
      })
      .addCase(updateRole.rejected, (state, action) => {
        state.list.loading = false
        state.list.error = action.error
        notification.error({
          message: "Sửa vai trò thất bại",
        })
      })
  }
})

export default roleSlice.reducer
