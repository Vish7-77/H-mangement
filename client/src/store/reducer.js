import { createReducer } from "@reduxjs/toolkit";

const userToken = localStorage.getItem("token") || null;
export const loadingReducer = createReducer({ loading: false }, (builder) => {
  builder
    .addCase("startLoading", (state) => {
      state.loading = true;
    })
    .addCase("stopLoading", (state) => {
      state.loading = false;
    });
});

export const userReducer = createReducer({ user: userToken }, (builder) => {
  builder.addCase("loginUser", (state, action) => {
    state.user = action.payload.token;
    state.userData = action.payload.userData;
  });
});

export const doctorsListReducer = createReducer(
  { doctors: null },
  (builder) => {
    builder.addCase("listDoctors", (state, action) => {
      state.doctors = action.payload;
    });
  }
);
