// src/redux/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "module-b",
  initialState: {},
  reducers: {},
});

// export const { } = counterSlice.actions;

export default counterSlice.reducer;
