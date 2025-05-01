import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "@/app/auth/store/signInSlice/authSliceInitialState";
import {
  SignInState,
  Tokens,
} from "@/app/auth/store/signInSlice/authSliceInterfaces";

const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    setSignInState(state, action: PayloadAction<SignInState>) {
      return action.payload;
    },
    updateTokens(state, action: PayloadAction<Tokens>) {
      state.tokens = action.payload;
    },
    clearAuthState() {
      return initialState;
    },
  },
});

export const { setSignInState, updateTokens, clearAuthState } =
  signInSlice.actions;

export default signInSlice.reducer;
