import { createAsyncThunk } from "@reduxjs/toolkit";
import routes from "core-authent/constants/routes";
import httpClient from "store/api";
import {
  ADD_POST_CATE,
  DELETE_POST_CATE,
  GET_LIST_POST_CATES,
  UPDATE_POST_CATE,
  GET_SINGLE_POST_CATES
} from "./types";

export const fetchPostCates = createAsyncThunk(
  GET_LIST_POST_CATES,
  async (thunkAPI) => {
    const response = await httpClient.get(routes.post_cate.postCates);
    return response.data;
  }
);

export const fetchSinglePostCates = createAsyncThunk(
  GET_SINGLE_POST_CATES,
  async (id, thunkAPI) => {
    const response = await httpClient.get(`${routes.post_cate.single}/${id}`);
    return response.data;
  }
);

export const deletePostCate = createAsyncThunk(
  DELETE_POST_CATE,
  async (id, thunkAPI) => {
    const response = await httpClient.delete(
      `${routes.post_cate.deletePostCate}/${id}`
    );
    if (response.data.success) {
      return id;
    } else {
      return null;
    }
  }
);

export const addPostCate = createAsyncThunk(
  ADD_POST_CATE,
  async (body, thunkAPI) => {
    const response = await httpClient.post(
      routes.post_cate.addPostCate,
      body
    );
    if (response.data.success && response.data.data) {
      return response.data.data;
    } else {
      return null;
    }
  }
);

export const updatePostCate = createAsyncThunk(
  UPDATE_POST_CATE,
  async (data, thunkAPI) => {
    const body = { ...data };
    delete body.id;
    const response = await httpClient.put(
      `${routes.post_cate.editPostCate}/${data.id}`,
      body
    );
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
