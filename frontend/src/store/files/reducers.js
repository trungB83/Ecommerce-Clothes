import { createSlice } from "@reduxjs/toolkit"
import { fetchFiles, deleteFile, addFile, updateFile, fetchDetailFile } from "./actions"
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

export const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFiles.pending, state => {
        state.list.loading = true
        state.list.result = {}
        state.list.error = {}
      })
      .addCase(fetchFiles.fulfilled, (state, action) => {
        state.list.loading = false
        state.list.result = action.payload
        state.list.error = {}
      })
      .addCase(fetchFiles.rejected, (state, action) => {
        state.list.loading = false
        state.list.result = {}
        state.list.error = action.error
      })

      .addCase(fetchDetailFile.pending, (state) => {
        state.item.loading = true;
        state.item.result = {};
        state.item.error = {};
      })
      .addCase(fetchDetailFile.fulfilled, (state, action) => {
        state.item.loading = false;
        state.item.result = action.payload;
        state.item.error = {};
      })
      .addCase(fetchDetailFile.rejected, (state, action) => {
        state.item.loading = false;
        state.item.result = {};
        state.item.error = action.error;
      })

      .addCase(deleteFile.pending, state => {
        state.list.loading = true
        state.list.error = {}
      })
      .addCase(deleteFile.fulfilled, (state, action) => {
        state.list.loading = false
        if (action.payload.id) {
          state.list.result = [
            ...state.list.result?.data.filter(
              item => item.file_id !== action.payload
            )
          ]
          notification.success({
            message: "Xóa tệp tin thành công",
          })
        }
        state.list.error = {}
      })
      .addCase(deleteFile.rejected, (state, action) => {
        state.list.loading = false
        state.list.error = action.error
        notification.error({
          message: "Xóa tệp tin thất bại",
        })
      })

      .addCase(addFile.pending, state => {
        state.list.loading = true
        state.list.error = {}
      })
      .addCase(addFile.fulfilled, (state, action) => {
        state.list.loading = false
        if (action.payload) {
          state.list.result?.data.unshift(action.payload);
          notification.success({
            message: "Thêm tệp tin thành công",
          })
        } else {
          notification.error({
            message: "Thêm tệp tin thất bại",
          })
        }
        state.list.error = {}
      })
      .addCase(addFile.rejected, (state, action) => {
        state.list.loading = false
        state.list.error = action.error
        notification.error({
          message: "Thêm tệp tin thất bại",
        })
      })

      .addCase(updateFile.pending, state => {
        state.list.loading = true
        state.list.error = {}
      })
      .addCase(updateFile.fulfilled, (state, action) => {
        state.item.loading = false;
        if (action.payload) {
          state.list.result.data.forEach((item, index) => {
            if (item.file_id === (action.payload?.id)) {
              state.list.result.data.splice(index, 1, action?.payload?.data);
            }
          })
          notification.success({
            message: "Sửa tệp tin thành công",
          });
        } else {
          notification.error({
            message: "Sửa tệp tin thất bại",
          });
        }
        state.item.error = {};
      })
      .addCase(updateFile.rejected, (state, action) => {
        state.list.loading = false
        state.list.error = action.error
        notification.error({
          message: "Sửa tệp tin thất bại",
        })
      })
  }
})

export default fileSlice.reducer
