import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthUserState, LoginPayload } from "../types";

const initialState: AuthUserState = {
  token: "",
  refreshToken: "",
  isLoggedin: false,
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<LoginPayload>) => {
      const { token, refreshToken } = action.payload;
      state.token = token;
      state.refreshToken = refreshToken;
      state.isLoggedin = true;
    },
    logoutUser: (state) => {
      state.token = "";
      state.refreshToken = "";
      state.user = {};
      state.isLoggedin = false;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
