// authSlice.ts
import { createSlice, PayloadAction, createAction, ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { Credentials, User } from "../../models/User";
import { RootState } from "state/store";

// Simulate an asynchronous login request
const fakeLoginRequest = (credentials: Credentials): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.username === "admin" &&
        credentials.password === "admin"
      ) {
        resolve({ username: "admin" });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 2000);
  });
};

// Define a thunk manually without using createAsyncThunk
export const loginAsync = (credentials: Credentials) => async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      dispatch(loginPending());
      const user = await fakeLoginRequest(credentials);
      dispatch(loginFulfilled(user));
      console.log(user)
    } catch (error) {
      dispatch(loginRejected((error as Error).message));
    }
  };

const loginPending = createAction("auth/loginPending");
const loginFulfilled = createAction<User>("auth/loginFulfilled");
const loginRejected = createAction<string>("auth/loginRejected");

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginPending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginFulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginRejected, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
