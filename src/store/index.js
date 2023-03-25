import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./authenticationSlice";
import {  usersApi } from "./usersApi";

export default configureStore({
  reducer: {
    authentication: authenticationReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
