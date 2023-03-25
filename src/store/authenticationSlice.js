import { createSlice } from "@reduxjs/toolkit";
import { parseJwt } from "../utils/parsers";

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    userId: null,
    token: null,
    isLoading: true,
    isExpired: 0,
  },
  reducers: {
    updateAuthentication(state) {
      const localData = JSON.parse(localStorage.getItem("userData"));
      if (localData) {
        const isExpired =
          !(parseJwt(localData.token).exp * 1000 - Date.now()) > 0;
        state.userId = localData.userId;
        state.token = localData.token;
        state.isLoading = false;
        state.isExpired = isExpired;
      } else {
        state.userId = null;
        state.token = null;
        state.isExpired = 0;
        state.isLoading = false;
      }
    },
  },
});

export const { updateAuthentication } = authenticationSlice.actions;

export default authenticationSlice.reducer;
