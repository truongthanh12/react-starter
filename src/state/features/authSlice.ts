// authSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/User";

// Define a thunk manually without using createAsyncThunk
export const loginAsync = () => {};
interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
