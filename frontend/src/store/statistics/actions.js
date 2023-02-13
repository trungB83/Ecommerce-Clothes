import { createAsyncThunk } from "@reduxjs/toolkit";
import routes from "core-authent/constants/routes";
import httpClient from "store/api";
import { GET_STATISTICS } from "./types";

export const fetchStatistics = createAsyncThunk(GET_STATISTICS, async (thunkAPI) => {
  const response = await httpClient.get(routes.statistics);
  return response.data;
});

