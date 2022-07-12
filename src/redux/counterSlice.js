import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = state.value + 1;
    },
  },
});

export const counterValueSelector = (state) => state.counter.value;

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
