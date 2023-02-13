import { createSlice } from "@reduxjs/toolkit"
import { fetchUserCates, deleteUserCate, addUserCate, updateUserCate } from "./actions"
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

export const userCateSlice = createSlice({
  name: "user-cates",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // get list user-cate
      .addCase(fetchUserCates.pending, state => {
        state.list.loading = true
        state.list.result = {}
        state.list.error = {}
      })
      .addCase(fetchUserCates.fulfilled, (state, action) => {
        state.list.loading = false
        state.list.result = action.payload
        state.list.error = {}
      })
      .addCase(fetchUserCates.rejected, (state, action) => {
        state.list.loading = false
        state.list.result = {}
        state.list.error = action.error
      })

      // delete user-cate
      .addCase(deleteUserCate.pending, state => {
        state.list.loading = true
        state.list.error = {}
      })
      .addCase(deleteUserCate.fulfilled, (state, action) => {
        state.list.loading = false
        if (action.payload) {
        state.list.result.data = [
          ...state.list.result?.data.filter(
            (item) => item.user_cate_id !== (action.payload)
          ),
        ];
       
          notification.success({
            message: "Xóa vai trò thành công",
          })
        } else {
          notification.error({
            message: "Xóa vai trò thất bại",
          })
        }
        state.list.error = {}
      })
      .addCase(deleteUserCate.rejected, (state, action) => {
        state.list.loading = false
        state.list.error = action.error
        notification.error({
          message: "Xóa vai trò thất bại",
        })
      })

      // add user-cate
      .addCase(addUserCate.pending, state => {
        state.list.loading = true
        state.list.error = {}
      })
      .addCase(addUserCate.fulfilled, (state, action) => {
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
      .addCase(addUserCate.rejected, (state, action) => {
        state.list.loading = false
        state.list.error = action.error
        notification.error({
          message: "Thêm vai trò thất bại",
        })
      })

      // update user-cate
      .addCase(updateUserCate.pending, state => {
        state.list.loading = true
        state.list.error = {}
      })
      .addCase(updateUserCate.fulfilled, (state, action) => {
        state.item.loading = false;
        if (action.payload) {
          state.list.result.data.forEach((item, index) => {
            if (item.user_cate_id === (action.payload?.id)) {
              state.list.result.data.splice(index, 1, action?.payload?.data);
            }
          })
          notification.success({
            message: "Sửa vai trò thành công",
          });
        } else {
          notification.error({
            message: "Sửa vai trò thất bại",
          });
        }
        state.item.error = {};
      })
      .addCase(updateUserCate.rejected, (state, action) => {
        state.list.loading = false
        state.list.error = action.error
        notification.error({
          message: "Sửa vai trò thất bại",
        })
      })
  }
})

export default userCateSlice.reducer
