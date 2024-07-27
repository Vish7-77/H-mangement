import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer, userReducer, doctorsListReducer } from "./reducer.js";

const store = configureStore({
  reducer: {
    loadingReducer,
    userReducer,
    doctorsListReducer,
  },
});

export default store;
