import { SignInState } from "@/app/auth/store/signInSlice/authSliceInterfaces";

export const initialState: SignInState = {
  mode: "test",
  message: "OK",
  sessionId: "",
  tokens: {
    access: {
      value: "",
      cookieOptions: {
        secure: false,
        sameSite: "Lax",
        path: "/",
        expires: 7,
      },
    },
    id: {
      value: "",
      cookieOptions: {
        secure: false,
        sameSite: "Lax",
        path: "/",
        expires: 7,
      },
    },
    refresh: {
      value: "",
      cookieOptions: {
        secure: false,
        sameSite: "Strict",
        path: "/",
        expires: 30,
      },
    },
  },
  nonce: "",
  redirectTo: "/dashboard",
};
