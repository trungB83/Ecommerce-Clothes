import { createSlice } from "@reduxjs/toolkit";
import {
  fetchStatistics
} from "./actions";

const initialState = {
  item: {
    loading: false,
    result: {},
    error: {},
  },
  list: {
    loading: false,
    result: {},
    error: {},
  },
};

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get list post
      .addCase(fetchStatistics.pending, (state) => {
        state.list.loading = true;
      })
      .addCase(fetchStatistics.fulfilled, (state, action) => {
        state.list.loading = false;
        state.list.result = action.payload;
        state.list.error = {};
      })
      .addCase(fetchStatistics.rejected, (state, action) => {
        state.list.loading = false;
        state.list.result = {};
        state.list.error = action.error;
      })
  },
});

export default statisticsSlice.reducer;
