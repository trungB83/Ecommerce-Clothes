import { createAsyncThunk } from "@reduxjs/toolkit";
import routes from "core-authent/constants/routes";
import httpClient from "store/api";
import { ADD_PAYMENT, DELETE_PAYMENT, GET_LIST_PAYMENT, UPDATE_PAYMENT } from "./types";

export const fetchPayment = createAsyncThunk(GET_LIST_PAYMENT, async (thunkAPI) => {
  const response = await httpClient.get(routes.payment.payments);
  return response.data;
});

export const deletePayment = createAsyncThunk(
  DELETE_PAYMENT,
  async (id, thunkAPI) => {
    const response = await httpClient.delete(`${routes.payment.deletePayment}/${id}`);
    if (response.data.success) {
      return id;
    } else {
      return null;
    }
  }
);

export const addPayment = createAsyncThunk(ADD_PAYMENT, async (body, thunkAPI) => {
  const response = await httpClient.post(routes.payment.addPayment, body);
  if (response.data.success && response.data.data) {
    return response.data.data;
  } else {
    return null;
  }
});

export const updatePayment = createAsyncThunk(
  UPDATE_PAYMENT,
  async (data, thunkAPI) => {
    const body = { ...data };
    delete body.id;
    const response = await httpClient.put(
      `${routes.payment.editPayment}/${data.id}`,
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
