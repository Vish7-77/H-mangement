import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer ,userReducer} from "./reducer.js";

const store = configureStore({
  reducer: {
    loadingReducer,
    userReducer
  },
});

export default store;
