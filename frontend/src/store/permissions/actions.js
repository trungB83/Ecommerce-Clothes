import { createAsyncThunk } from "@reduxjs/toolkit";
import routes from "core-authent/constants/routes";
import httpClient from "store/api";
import { ADD_PERMISSION, DELETE_PERMISSION, GET_LIST_PERMISSIONS, UPDATE_PERMISSION, GET_DETAIL_PERMISSION } from "./types";

export const fetchPermissions = createAsyncThunk(GET_LIST_PERMISSIONS, async (thunkAPI) => {
  const response = await httpClient.get(routes.permission.permissions);
  return response.data;
});

export const fetchDetailPermission = createAsyncThunk(
  GET_DETAIL_PERMISSION,
  async (id, thunkAPI) => {
    const response = await httpClient.get(`${routes.permission.detail}/${id}`);
    return response.data;
  }
);

export const deletePermission = createAsyncThunk(
  DELETE_PERMISSION,
  async (id, thunkAPI) => {
    const response = await httpClient.delete(`${routes.permission.deletePermission}/${id}`);
    if (response.data.success) {
      return id;
    } else {
      return null;
    }
  }
);

export const addPermission = createAsyncThunk(ADD_PERMISSION, async (body, thunkAPI) => {
  const response = await httpClient.post(routes.permission.addPermission, body);
  if (response.data.success && response.data.data) {
    return response.data.data;
  } else {
    return null;
  }
});

export const updatePermission = createAsyncThunk(
  UPDATE_PERMISSION,
  async (data, thunkAPI) => {
    const body = { ...data };
    delete body.id;
    const response = await httpClient.put(
      `${routes.permission.editPermission}/${data.id}`,
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
