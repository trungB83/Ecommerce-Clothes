import { createSlice } from "@reduxjs/toolkit"
import { fetchUsers, deleteUser, addUser, updateUser, fetchDetailUser } from "./actions"
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
  name: "users",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // get list user
      .addCase(fetchUsers.pending, state => {
        state.list.loading = true
        state.list.result = {}
        state.list.error = {}
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.list.loading = false
        state.list.result = action.payload
        state.list.error = {}
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.list.loading = false
        state.list.result = {}
        state.list.error = action.error
      })

      .addCase(fetchDetailUser.pending, (state) => {
        state.item.loading = true;
        state.item.result = {};
        state.item.error = {};
      })
      .addCase(fetchDetailUser.fulfilled, (state, action) => {
        state.item.loading = false;
        state.item.result = action.payload;
        state.item.error = {};
      })
      .addCase(fetchDetailUser.rejected, (state, action) => {
        state.item.loading = false;
        state.item.result = {};
        state.item.error = action.error;
      })

      // delete user
      .addCase(deleteUser.pending, state => {
        state.list.loading = true
        state.list.error = {}
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.list.loading = false
        if (action.payload.id) {
          state.list.result.data = [
            ...state.list.result?.data.filter(
              (item) => item.user_id !== (action.payload)
            ),
          ];
          notification.success({
            message: "Xóa người dùng thành công",
          })
        }
        state.list.error = {}
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.list.loading = false
        state.list.error = action.error
        notification.error({
          message: "Xóa người dùng thất bại",
        })
      })

      // add user
      .addCase(addUser.pending, state => {
        state.list.loading = true
        state.list.error = {}
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.list.loading = false
        if (action.payload) {
          state.list.result?.data.unshift(action.payload);
          notification.success({
            message: "Thêm người dùng thành công",
          })
        } else {
          notification.error({
            message: "Thêm người dùng thất bại",
          })
        }
        state.list.error = {}
      })
      .addCase(addUser.rejected, (state, action) => {
        state.list.loading = false
        state.list.error = action.error
        notification.error({
          message: "Thêm người dùng thất bại",
        })
      })

      // update user
      .addCase(updateUser.pending, state => {
        state.list.loading = true
        state.list.error = {}
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.item.loading = false;
        if (action.payload) {
          state.item.result = action.payload
          notification.success({
            message: "Sửa người dùng thành công",
          });
        } else {
          notification.error({
            message: "Sửa người dùng thất bại",
          });
        }
        state.item.error = {};
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.list.loading = false
        state.list.error = action.error
        notification.error({
          message: "Sửa người dùng thất bại",
        })
      })
  }
})

export default userSlice.reducer
