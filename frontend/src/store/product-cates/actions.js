import { createAsyncThunk } from "@reduxjs/toolkit";
import routes from "core-authent/constants/routes";
import httpClient from "store/api";
import { ADD_PRODUCT_CATE, DELETE_PRODUCT_CATE, GET_LIST_PRODUCT_CATE, UPDATE_PRODUCT_CATE, GET_SINGLE_PRODUCT_CATE } from "./types";

export const fetchProductCates = createAsyncThunk(GET_LIST_PRODUCT_CATE, async (thunkAPI) => {
  const response = await httpClient.get(routes.product_cate.product_cates);
  return response.data;
});

export const fetchSingleProductCate = createAsyncThunk(GET_SINGLE_PRODUCT_CATE,
  async (id, thunkAPI) => {
    const response = await httpClient.get(`${routes.product_cate.single}/${id}`);
    return response.data;
  }
);

export const deleteProductCate = createAsyncThunk(
  DELETE_PRODUCT_CATE,
  async (id, thunkAPI) => {
    const response = await httpClient.delete(`${routes.product_cate.deleteProduct_cate}/${id}`);
    if (response.data.success) {
      return id;
    } else {
      return null;
    }
  }
);

export const addProductCate = createAsyncThunk(ADD_PRODUCT_CATE, async (body, thunkAPI) => {
  const response = await httpClient.post(routes.product_cate.addProduct_cate, body);
  if (response.data.success && response.data.data) {
    return response.data.data;
  } else {
    return null;
  }
});

export const updateProductCate = createAsyncThunk(
  UPDATE_PRODUCT_CATE,
  async (data, thunkAPI) => {
    const response = await httpClient.put(`${routes.product_cate.editProduct_cate}/${data.id}`, data);
    if (response.data.success && response.data.data) {
      return {
        id: data.id,
        data: response.data.data,
      };
    } else {
      return null;
    }
  }
);
