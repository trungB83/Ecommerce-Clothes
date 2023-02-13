import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPostCates,
  deletePostCate,
  addPostCate,
  updatePostCate,
  fetchSinglePostCates, 
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

export const postCateSlice = createSlice({
  name: "post-cates",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostCates.pending, (state) => {
        state.list.loading = true;
        state.list.result = {};
        state.list.error = {};
      })
      .addCase(fetchPostCates.fulfilled, (state, action) => {
        state.list.loading = false;
        state.list.result = action.payload;
        state.list.error = {};
      })
      .addCase(fetchPostCates.rejected, (state, action) => {
        state.list.loading = false;
        state.list.result = {};
        state.list.error = action.error;
      })
      .addCase(fetchSinglePostCates.pending, (state) => {
        state.item.loading = true;
        state.item.result = {};
        state.item.error = {};
      })
      .addCase(fetchSinglePostCates.fulfilled, (state, action) => {
        state.item.loading = false;
        state.item.result = action.payload;
        state.item.error = {};
      })
      .addCase(fetchSinglePostCates.rejected, (state, action) => {
        state.item.loading = false;
        state.item.result = {};
        state.item.error = action.error;
      })

      .addCase(deletePostCate.pending, (state) => {
        state.list.loading = true;
        state.list.error = {};
      })
      .addCase(deletePostCate.fulfilled, (state, action) => {
        state.list.loading = false;
        if (action.payload) {
          state.list.result.data = [
            ...state.list.result?.data.filter(
              (item) => item.post_cate_id !== (action.payload)
            ),
          ];
          notification.success({
            message: "Xóa danh mục thành công",
          });
        } else {
          notification.error({
            message: "Xóa danh mục thất bại",
          });
        }
        state.list.error = {};
      })
      .addCase(deletePostCate.rejected, (state, action) => {
        state.list.loading = false;
        state.list.error = action.error;
        notification.error({
          message: "Xóa danh mục thất bại",
        });
      })

      .addCase(addPostCate.pending, (state) => {
        state.list.loading = true;
        state.list.error = {};
      })
      .addCase(addPostCate.fulfilled, (state, action) => {
        state.list.loading = false;
        if (action.payload) {
          state.list.result?.data.unshift(action.payload);
          notification.success({
            message: "Thêm danh mục thành công",
          });
        } else {
          notification.error({
            message: "Thêm danh mục thất bại",
          });
        }
        state.list.error = {};
      })
      .addCase(addPostCate.rejected, (state, action) => {
        state.list.loading = false;
        state.list.error = action.error;
        notification.error({
          message: "Thêm danh mục thất bại",
        });
      })

      .addCase(updatePostCate.pending, (state) => {
        state.list.loading = true;
        state.list.error = {};
      })
      .addCase(updatePostCate.fulfilled, (state, action) => {
        state.item.loading = false;
        if (action.payload) {
          state.list.result.data.forEach((item, index) => {
            if (item.post_cate_id === (action.payload?.id)) {
              state.list.result.data.splice(index, 1, action?.payload?.data);
            }
          })
          notification.success({
            message: "Sửa danh mục bài viết thành công",
          });
        } else {
          notification.error({
            message: "Sửa danh mục bài viết thất bại",
          });
        }
        state.item.error = {};
      })
      .addCase(updatePostCate.rejected, (state, action) => {
        state.list.loading = false;
        state.list.error = action.error;
        notification.error({
          message: "Sửa danh mục thất bại",
        });
      });
  },
});

export default postCateSlice.reducer;
