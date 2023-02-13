import { createAsyncThunk } from "@reduxjs/toolkit";
import routes from "core-authent/constants/routes";
import httpClient from "store/api";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_LIST_PRODUCTS,
  GET_DETAIL_PRODUCT,
  UPDATE_PRODUCT,
} from "./types";

export const fetchProducts = createAsyncThunk(GET_LIST_PRODUCTS, async (thunkAPI) => {
  const response = await httpClient.get(routes.product.products);
  return response.data;
});

export const fetchDetailProduct = createAsyncThunk(
  GET_DETAIL_PRODUCT,
  async (id, thunkAPI) => {
    const response = await httpClient.get(`${routes.product.single}/${id}`);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  DELETE_PRODUCT,
  async (id, thunkAPI) => {
    const response = await httpClient.delete(`${routes.product.deleteProduct}/${id}`);
    if (response.data.success) {
      return id;
    } else {
      return null;
    }
  }
);

export const addProduct = createAsyncThunk(ADD_PRODUCT, async (body, thunkAPI) => {
  const response = await httpClient.post(routes.product.addProduct, body);
  if (response.data.success && response.data.data) {
    return response.data.data;
  } else {
    return null;
  }
});

export const updateProduct = createAsyncThunk(
  UPDATE_PRODUCT,
  async (data, thunkAPI) => {
    const response = await httpClient.put(`${routes.product.editProduct}/${data.id}`, data);
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
