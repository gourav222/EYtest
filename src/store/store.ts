// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import moduleAReducer from "../slice/module-a";
import moduleBReducer from "../slice/module-b";
import moduleCReducer from "../slice/module-c";

const store = configureStore({
  reducer: {
    moduleA: moduleAReducer,
    moduleB: moduleBReducer,
    moduleC: moduleCReducer,
  },
  devTools: import.meta.env.DEV,
});

export default store;
