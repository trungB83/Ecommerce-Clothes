import { createAsyncThunk } from "@reduxjs/toolkit";
import routes from "core-authent/constants/routes";
import httpClient from "store/api";
import { GET_LIST_ORDER_ITEMS, ADD_ORDER_ITEM_ITEM, UPDATE_ORDER_ITEM, DELETE_ORDER_ITEM } from "./types";

export const fetchOrderItem = createAsyncThunk(GET_LIST_ORDER_ITEMS, async (thunkAPI) => {
  const response = await httpClient.get(routes.order_item.order_items);
  return response.data;
});

export const deleteOrderItem = createAsyncThunk(
  DELETE_ORDER_ITEM,
  async (id, thunkAPI) => {
    const response = await httpClient.delete(
      `${routes.order_item.deleteOrderItem}/${id}`
    );
    if (response.data.success) {
      return id;
    } else {
      return null;
    }
  }
);

export const addOrderItem = createAsyncThunk(ADD_ORDER_ITEM_ITEM, async (body, thunkAPI) => {
  const response = await httpClient.post(routes.order_item.addOrderItem, body);
  if (response.data.success && response.data.data) {
    return response.data.data;
  } else {
    return null;
  }
});

export const updateOrderItem = createAsyncThunk(
  UPDATE_ORDER_ITEM,
  async (data, thunkAPI) => {
    const body = { ...data };
    delete body.id;
    const response = await httpClient.put(
      `${routes.order_item.editOrderItem}/${data.id}`,
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
