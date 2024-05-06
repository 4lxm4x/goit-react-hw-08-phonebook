import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { registerUser, requestCurrentUser } from '../operations/operations';
import { loginUser } from '../operations/operations';
import * as API from '../../api';

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState.user,
  reducers: {
    logoutUser(state) {
      API.logout();
      state.isLoggedIn = false;
      state.name = '';
      state.email = '';
      state.token = '';
    },
  },

  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.isLoading = state.name = action.payload.user.name;
        state.email = action.payload.user.email;
        state.error = '';
      })
      .addCase(registerUser.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(registerUser.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isLoading = false;
        state.token = action.payload.token;
        state.name = action.payload.user.name;
        state.email = action.payload.user.email;
        state.error = '';
      })
      .addCase(loginUser.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(loginUser.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      })
      .addCase(requestCurrentUser.pending, (state, action) => {
        return { ...state, isLoading: true };
      })
      .addCase(requestCurrentUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isLoading = false;
        console.log(action.payload);

        state.name = action.payload.name;
        state.email = action.payload.email;
        state.error = '';
      })
      .addCase(requestCurrentUser.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      });
  },
});

export const authReducer = authSlice.reducer;
export const { logoutUser } = authSlice.actions;
// export const loginReducer = loginSlice.reducer;
