// src/redux/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "module-a",
  initialState: {},
  reducers: {},
});

// export const { } = counterSlice.actions;

export default counterSlice.reducer;
