import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { registerUser, requestCurrentUser } from '../operations/operations';
import { loginUser } from '../operations/operations';
import { logoutUser } from '../operations/operations';
import { Notify } from 'notiflix';

Notify.init({ position: 'left-bottom' });

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState.user,
  reducers: {
    logout(state) {
      logoutUser();
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
        const error = action.payload;

        if (error.response.status === 500) {
          Notify.failure('Server error. Try again later');
        }
        return { ...state, isLoading: false, error: action.payload };
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isLoading = false;
        state.token = action.payload.token;
        state.name = action.payload.user.name;
        state.email = action.payload.user.email;
        state.error = '';
        Notify.success('Login success');
      })
      .addCase(loginUser.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(loginUser.rejected, (state, action) => {
        const error = action.payload;
        if (error.response.status === 400) {
          Notify.failure('Wrong name or password');
        }
        if (error.response.status === 500) {
          Notify.failure('Server error. Try again later');
        }
        return { ...state, isLoading: false, error: error };
      })
      .addCase(requestCurrentUser.pending, (state, action) => {
        return { ...state, isLoading: true };
      })
      .addCase(requestCurrentUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isLoading = false;

        state.name = action.payload.name;
        state.email = action.payload.email;
        state.error = '';
      })
      .addCase(requestCurrentUser.rejected, (state, action) => {
        const error = action.payload;
        if (error.response.status === 400) {
          Notify.failure('Wrong name or password');
        }
        if (error.response.status === 500) {
          Notify.failure('Server error. Try again later');
        }
        return { ...state, isLoading: false, error: error };
      });
  },
});

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
