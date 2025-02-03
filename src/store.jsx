// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slice";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
