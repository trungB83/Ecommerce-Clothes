import { createSlice } from "@reduxjs/toolkit"
import { fetchPermissions, deletePermission, addPermission, updatePermission, fetchDetailPermission } from "./actions"
import { notification } from "antd"

const initialState = {
  item: {
    loading: false,
    result: {},
    error: {}
  },
  list: {
    loading: false,
    result: {},
    error: {}
  }
}

export const userSlice = createSlice({
  name: "permissions",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // get list user
      .addCase(fetchPermissions.pending, state => {
        state.list.loading = true
        state.list.result = {}
        state.list.error = {}
      })
      .addCase(fetchPermissions.fulfilled, (state, action) => {
        state.list.loading = false
        state.list.result = action.payload
        state.list.error = {}
      })
      .addCase(fetchPermissions.rejected, (state, action) => {
        state.list.loading = false
        state.list.result = {}
        state.list.error = action.error
      })

      .addCase(fetchDetailPermission.pending, (state) => {
        state.item.loading = true;
        state.item.result = {};
        state.item.error = {};
      })
      .addCase(fetchDetailPermission.fulfilled, (state, action) => {
        state.item.loading = false;
        state.item.result = action.payload;
        state.item.error = {};
      })
      .addCase(fetchDetailPermission.rejected, (state, action) => {
        state.item.loading = false;
        state.item.result = {};
        state.item.error = action.error;
      })

      // delete user
      .addCase(deletePermission.pending, state => {
        state.list.loading = true
        state.list.error = {}
      })
      .addCase(deletePermission.fulfilled, (state, action) => {
        state.list.loading = false
        if (action.payload.id) {
          state.list.result.data = [
            ...state.list.result?.data.filter(
              (item) => item.permission_id !== (action.payload)
            ),
          ];
          notification.success({
            message: "Xóa phân quyền thành công",
          })
        }
        state.list.error = {}
      })
      .addCase(deletePermission.rejected, (state, action) => {
        state.list.loading = false
        state.list.error = action.error
        notification.error({
          message: "Xóa phân quyền thất bại",
        })
      })

      // add user
      .addCase(addPermission.pending, state => {
        state.list.loading = true
        state.list.error = {}
      })
      .addCase(addPermission.fulfilled, (state, action) => {
        state.list.loading = false
        if (action.payload) {
          state.list.result?.data.unshift(action.payload);
          notification.success({
            message: "Thêm phân quyền thành công",
          })
        } else {
          notification.error({
            message: "Thêm phân quyền thất bại",
          })
        }
        state.list.error = {}
      })
      .addCase(addPermission.rejected, (state, action) => {
        state.list.loading = false
        state.list.error = action.error
        notification.error({
          message: "Thêm phân quyền thất bại",
        })
      })

      // update user
      .addCase(updatePermission.pending, state => {
        state.list.loading = true
        state.list.error = {}
      })
      .addCase(updatePermission.fulfilled, (state, action) => {
        state.item.loading = false;
        if (action.payload) {
          state.item.result = action.payload
          notification.success({
            message: "Sửa phân quyền thành công",
          });
        } else {
          notification.error({
            message: "Sửa phân quyền thất bại",
          });
        }
        state.item.error = {};
      })
      .addCase(updatePermission.rejected, (state, action) => {
        state.list.loading = false
        state.list.error = action.error
        notification.error({
          message: "Sửa phân quyền thất bại",
        })
      })
  }
})

export default userSlice.reducer
