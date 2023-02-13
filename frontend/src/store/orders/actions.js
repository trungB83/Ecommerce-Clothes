import { createAsyncThunk } from "@reduxjs/toolkit";
import routes from "core-authent/constants/routes";
import httpClient from "store/api";
import { ADD_ORDER, DELETE_ORDER, GET_LIST_ORDERS, GET_SINGLE_ORDERS, UPDATE_ORDER } from "./types";

export const fetchOrder = createAsyncThunk(GET_LIST_ORDERS, async (thunkAPI) => {
  const response = await httpClient.get(routes.order.orders);
  return response.data;
});

export const fetchDetailOrder = createAsyncThunk(GET_SINGLE_ORDERS, async (id, thunkAPI) => {
  const response = await httpClient.get(
    `${routes.order.single}/${id}`
  );
  return response.data;
});

export const deleteOrder = createAsyncThunk(
  DELETE_ORDER,
  async (id, thunkAPI) => {
    const response = await httpClient.delete(
      `${routes.order.deleteOrder}/${id}`
    );
    if (response.data.success) {
      return id;
    } else {
      return null;
    }
  }
);

export const addOrder = createAsyncThunk(ADD_ORDER, async (body, thunkAPI) => {
  const response = await httpClient.post(routes.order.addOrder, body);
  if (response.data.success && response.data.data) {
    return response.data.data;
  } else {
    return null;
  }
});

export const updateOrder = createAsyncThunk(
  UPDATE_ORDER,
  async (data, thunkAPI) => {
    const body = { ...data };
    delete body.id;
    const response = await httpClient.put(
      `${routes.order.editOrder}/${data.id}`,
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
