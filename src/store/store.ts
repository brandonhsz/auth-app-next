import { configureStore } from "@reduxjs/toolkit";
import { signInReducer } from "@/modules/auth/store";
export const store = configureStore({
  reducer: {
    signInReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
