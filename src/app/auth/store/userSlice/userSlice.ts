import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "@/modules/auth/store/userSlice/userSliceInitialState";
import { UserState } from "@/modules/auth/store/userSlice/userSliceInterfaces";
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserState(state, action: PayloadAction<UserState>) {
      return action.payload;
    },
    updateUserField<K extends keyof UserState>(
      state: UserState,
      action: PayloadAction<{ field: K; value: UserState[K] }>
    ) {
      state[action.payload.field] = action.payload.value;
    },
    clearUserState() {
      return initialState;
    },
  },
});

export const { setUserState, updateUserField, clearUserState } =
  userSlice.actions;

export default userSlice.reducer;
