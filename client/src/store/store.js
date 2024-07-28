import { configureStore } from "@reduxjs/toolkit";
import {
  loadingReducer,
  userReducer,
  doctorsListReducer,
  myAppointmentsReducer,
} from "./reducer.js";

const store = configureStore({
  reducer: {
    loadingReducer,
    userReducer,
    doctorsListReducer,
    myAppointmentsReducer,
  },
});

export default store;
