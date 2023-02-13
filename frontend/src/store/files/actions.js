import { createAsyncThunk } from "@reduxjs/toolkit";
import routes from "core-authent/constants/routes";
import httpClient from "store/api";
import { ADD_FILE, DELETE_FILE, GET_LIST_FILES, UPDATE_FILE, GET_DETAIL_FILE } from "./types";

export const fetchFiles = createAsyncThunk(GET_LIST_FILES, async (thunkAPI) => {
  const response = await httpClient.get(routes.file.files);
  return response.data;
});

export const fetchDetailFile = createAsyncThunk(
  GET_DETAIL_FILE,
  async (id,thunkAPI) => {
    const response = await httpClient.get(`${routes.file.detail}/${id}`);
    return response.data;
  }
);

export const deleteFile = createAsyncThunk(
  DELETE_FILE,
  async (id, thunkAPI) => {
    const response = await httpClient.delete(`${routes.file.deleteFile}/${id}`);
    if (response.data.success) {
      return id;
    } else {
      return null;
    }
  }
);

export const addFile = createAsyncThunk(ADD_FILE, async (body, thunkAPI) => {
  const response = await httpClient.post(routes.file.addFile, body);
  if (response.data.success && response.data.data) {
    return response.data.data;
  } else {
    return null;
  }
});

export const updateFile = createAsyncThunk(
  UPDATE_FILE,
  async (data, thunkAPI) => {
    const body = { ...data };
    delete body.id;
    const response = await httpClient.put(
      `${routes.file.editFile}/${data.id}`,
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
