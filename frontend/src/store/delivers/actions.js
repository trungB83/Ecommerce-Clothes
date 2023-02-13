import { createAsyncThunk } from "@reduxjs/toolkit";
import routes from "core-authent/constants/routes";
import httpClient from "store/api";
import { ADD_DELIVER, DELETE_DELIVER, GET_LIST_DELIVER, UPDATE_DELIVER } from "./types";

export const fetchDeliver = createAsyncThunk(GET_LIST_DELIVER, async (thunkAPI) => {
  const response = await httpClient.get(routes.deliver.delivers);
  return response.data;
});

export const deleteDeliver = createAsyncThunk(
  DELETE_DELIVER,
  async (id, thunkAPI) => {
    const response = await httpClient.delete(
      `${routes.deliver.deleteDeliver}/${id}`
    );
    if (response.data.success) {
      return id;
    } else {
      return null;
    }
  }
);

export const addDeliver = createAsyncThunk(ADD_DELIVER, async (body, thunkAPI) => {
  const response = await httpClient.post(routes.deliver.addDeliver, body);
  if (response.data.success && response.data.data) {
    return response.data.data;
  } else {
    return null;
  }
});

export const updateDeliver = createAsyncThunk(
  UPDATE_DELIVER,
  async (data, thunkAPI) => {
    const body = { ...data };
    delete body.id;
    const response = await httpClient.put(
      `${routes.deliver.editDeliver}/${data.id}`,
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
