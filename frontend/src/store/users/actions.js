import { createAsyncThunk } from "@reduxjs/toolkit";
import routes from "core-authent/constants/routes";
import httpClient from "store/api";
import { ADD_USER, DELETE_USER, GET_LIST_USERS, UPDATE_USER, GET_DETAIL_USER } from "./types";

export const fetchUsers = createAsyncThunk(GET_LIST_USERS, async (thunkAPI) => {
  const response = await httpClient.get(routes.user.users);
  return response.data;
});

export const fetchDetailUser = createAsyncThunk(
  GET_DETAIL_USER,
  async (id,thunkAPI) => {
    const response = await httpClient.get(`${routes.user.detail}/${id}`);
    return response.data;
  }
);

export const deleteUser = createAsyncThunk(
  DELETE_USER,
  async (id, thunkAPI) => {
    const response = await httpClient.delete(`${routes.user.deleteUser}/${id}`);
    if (response.data.success) {
      return id;
    } else {
      return null;
    }
  }
);

export const addUser = createAsyncThunk(ADD_USER, async (body, thunkAPI) => {
  const response = await httpClient.post(routes.user.addUser, body);
  if (response.data.success && response.data.data) {
    return response.data.data;
  } else {
    return null;
  }
});

export const updateUser = createAsyncThunk(
  UPDATE_USER,
  async (data, thunkAPI) => {
    const body = { ...data };
    delete body.id;
    const response = await httpClient.put(
      `${routes.user.editUser}/${data.id}`,
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
