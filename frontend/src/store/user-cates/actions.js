import { createAsyncThunk } from "@reduxjs/toolkit";
import routes from "core-authent/constants/routes";
import httpClient from "store/api";
import { ADD_USER_CATE, DELETE_USER_CATE, GET_LIST_USER_CATE, UPDATE_USER_CATE } from "./types";

export const fetchUserCates = createAsyncThunk(GET_LIST_USER_CATE, async (thunkAPI) => {
  const response = await httpClient.get(routes.user_cate.user_cates);
  return response.data;
});

export const deleteUserCate = createAsyncThunk(
  DELETE_USER_CATE,
  async (id, thunkAPI) => {
    const response = await httpClient.delete(`${routes.user_cate.deleteUserCate}/${id}`);
    if (response.data.success) {
      return id;
    } else {
      return null;
    }
  }
);

export const addUserCate = createAsyncThunk(ADD_USER_CATE, async (body, thunkAPI) => {
  const response = await httpClient.post(routes.user_cate.addUserCate, body);
  if (response.data.success && response.data.data) {
    return response.data.data;
  } else {
    return null;
  }
});

export const updateUserCate = createAsyncThunk(
  UPDATE_USER_CATE,
  async (data, thunkAPI) => {
    const body = { ...data };
    delete body.id;
    const response = await httpClient.put(
      `${routes.user_cate.editUserCate}/${data.id}`,
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
