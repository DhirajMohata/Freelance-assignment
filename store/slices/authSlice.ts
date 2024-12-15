import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  userDetails: { email: string } | null;
  token: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  userDetails: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string; token: string }>) => {
      state.isLoggedIn = true;
      state.userDetails = { email: action.payload.email };
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userDetails = null;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
