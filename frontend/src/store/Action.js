import {
  ADD_CART_PRODUCTS,
  ADD_ORDER_PRODUCT,
  ADD_POST,
  ADD_USER,
  DECREASE_QUANTITY,
  DELETE_CART_PRODUCTS,
  DELETE_ORDER_PRODUCT,
  DELETE_POST,
  DELETE_USER,
  GET_LIST_POST,
  GET_LIST_USER,
  INCREASE_QUANTITY,
  UPDATE_CART_PRODUCTS,
  UPDATE_POST,
  UPDATE_USER,
} from "./Types";
import httpClient from "../axiosClient";
import { pathApi } from "../core-authent/constants/pathApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addCartProduct = (payload) => {
  return {
    type: ADD_CART_PRODUCTS,
    value: payload,
  };
};

export const DeleteCart = (payload) => {
  console.log("delete Clicked");
  return {
    type: DELETE_CART_PRODUCTS,
    value: payload,
  };
};

export const updateCartProduct = (payload) => {
  return {
    type: UPDATE_CART_PRODUCTS,
    value: payload,
  };
};

export function IncreaseQuantity(payload) {
  return {
    type: INCREASE_QUANTITY,
    value: payload,
  };
}
export function DecreaseQuantity(payload) {
  return {
    type: DECREASE_QUANTITY,
    value: payload,
  };
}

export function addOrderProduct(payload) {
  return {
    type: ADD_ORDER_PRODUCT,
    value: payload,
  };
}

export function deleteOrderProduct(payload) {
  return {
    type: DELETE_ORDER_PRODUCT,
    value: payload,
  };
}

export const fetchUser = createAsyncThunk(GET_LIST_USER, async (thunkAPI) => {
  const response = await httpClient.get(pathApi.user.users);
  return response.data;
});

export const deleteUser = createAsyncThunk(DELETE_USER, async (id) => {
  const response = await httpClient.delete(`${pathApi.user.deleteUser}/${id}`);
  if (response.data.success) {
    return id;
  } else {
    return null;
  }
});

export const addUser = createAsyncThunk(ADD_USER, async (body) => {
  const response = await httpClient.post(pathApi.user.addUser, body);
  if (response.data.success && response.data.data) {
    return response.data.data;
  } else {
    return null;
  }
});

export const updateUser = createAsyncThunk(UPDATE_USER, async (data) => {
  const body = { ...data };
  delete body.id;
  const response = await httpClient.put(
    `${pathApi.user.updateUser}/${data.id}`,
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
});

export const fetchPosts = createAsyncThunk(GET_LIST_POST, async (thunkAPI) => {
  const response = await httpClient.get(pathApi.post.posts);
  return response.data;
});

export const deletePost = createAsyncThunk(
  DELETE_POST,
  async (id, thunkAPI) => {
    const response = await httpClient.delete(
      `${pathApi.post.deletePost}/${id}`
    );
    if (response.data.success) {
      return id;
    } else {
      return null;
    }
  }
);

export const addPost = createAsyncThunk(ADD_POST, async (body, thunkAPI) => {
  const response = await httpClient.post(pathApi.post.addPost, body);
  if (response.data.success && response.data.data) {
    return response.data.data;
  } else {
    return null;
  }
});

export const updatePost = createAsyncThunk(
  UPDATE_POST,
  async (data, thunkAPI) => {
    const body = { ...data };
    delete body.id;
    const response = await httpClient.put(
      `${pathApi.post.updatePost}/${data.id}`,
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
