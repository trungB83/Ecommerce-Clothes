import { createAsyncThunk } from "@reduxjs/toolkit";
import routes from "core-authent/constants/routes";
import httpClient from "store/api";
import {
  ADD_POST,
  DELETE_POST,
  GET_LIST_POSTS,
  GET_DETAIL_POST,
  UPDATE_POST,
} from "./types";

export const fetchPosts = createAsyncThunk(GET_LIST_POSTS, async (thunkAPI) => {
  const response = await httpClient.get(routes.post.posts);
  return response.data;
});

export const fetchDetailPost = createAsyncThunk(
  GET_DETAIL_POST,
  async (id, thunkAPI) => {
    const response = await httpClient.get(`${routes.post.single}/${id}`);
    return response.data;
  }
);

export const deletePost = createAsyncThunk(
  DELETE_POST,
  async (id, thunkAPI) => {
    const response = await httpClient.delete(`${routes.post.deletePost}/${id}`);
    if (response.data.success) {
      return id;
    } else {
      return null;
    }
  }
);

export const addPost = createAsyncThunk(ADD_POST, async (body, thunkAPI) => {
  const response = await httpClient.post(routes.post.addPost, body);
  if (response.data.success && response.data.data) {
    return response.data.data;
  } else {
    return null;
  }
});

export const updatePost = createAsyncThunk(
  UPDATE_POST,
  async (data, thunkAPI) => {
    const response = await httpClient.put(`${routes.post.editPost}/${data.id}`, data);
    if (response.data.success && response.data.data) {
      return {
        data: response.data.data,
        id: data.id,
      };
    } else {
      return null;
    }
  }
);
