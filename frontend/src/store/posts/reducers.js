import { createSlice  } from "@reduxjs/toolkit";
import {
  fetchPosts,
  fetchDetailPost,
  deletePost,
  addPost,
  updatePost,
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

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get list post
      .addCase(fetchPosts.pending, (state) => {
        state.list.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.list.loading = false;
        state.list.result = action.payload;
        state.list.error = {};
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.list.loading = false;
        state.list.result = {};
        state.list.error = action.error;
      })

      .addCase(fetchDetailPost.pending, (state) => {
        state.item.loading = true;
        state.item.result = {};
        state.item.error = {};
      })
      .addCase(fetchDetailPost.fulfilled, (state, action) => {
        state.item.loading = false;
        state.item.result = action.payload;
        state.item.error = {};
      })
      .addCase(fetchDetailPost.rejected, (state, action) => {
        state.item.loading = false;
        state.item.result = {};
        state.item.error = action.error;
      })

      // delete post
      .addCase(deletePost.pending, (state) => {
        state.list.loading = true;
        state.list.error = {};
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.list.loading = false;
        if (action.payload) {
          state.list.result.data = [
            ...state.list.result?.data.filter(
              (item) => item.post_id !== (action.payload)
            ),
          ];
          notification.success({
            message: "Xóa bài viết thành công",
          });
        } else {
          notification.error({
            message: "Xóa bài viết thất bại",
          });
        }
        state.list.error = {};
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.list.loading = false;
        state.list.error = action.error;
        notification.error({
          message: "Xóa bài viết thất bại",
        });
      })

      // add post
      .addCase(addPost.pending, (state) => {
        state.list.loading = true;
        state.list.error = {};
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.list.loading = false;
        if (action.payload) {
          state.list.result?.data.unshift(action.payload);
          notification.success({
            message: "Thêm bài viết thành công",
          });
        } else {
          notification.error({
            message: "Thêm bài viết thất bại",
          });
        }
        state.list.error = {};
      })
      .addCase(addPost.rejected, (state, action) => {
        state.list.loading = false;
        state.list.error = action.error;
        notification.error({
          message: "Thêm bài viết thất bại",
        });
      })

      // update post
      .addCase(updatePost.pending, (state) => {
        state.item.loading = true;
        state.item.error = {};
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.item.loading = false;
        if (action.payload) {
          state.item.result = action.payload
          notification.success({
            message: "Sửa bài viết thành công",
          });
        } else {
          notification.error({
            message: "Sửa bài viết thất bại",
          });
        }
        state.item.error = {};
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.item.loading = false;
        state.item.error = action.error;
        notification.error({
          message: "Sửa bài viết thất bại",
        });
      });
  },
});

export default postSlice.reducer;

export const selectAllPosts = state => state.posts.list.result.data

export const selectPostById = (state, postId) =>
  state.posts.list.result.data.find(item => item.post_id === postId)