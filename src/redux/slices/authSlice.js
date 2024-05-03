import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { registerUser } from '../operations/operations';
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
    },
  },

  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isLoading = state.name = action.payload.user.name;
        state.email = action.payload.user.email;
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
        state.name = action.payload.user.name;
        state.email = action.payload.user.email;
      })
      .addCase(loginUser.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(loginUser.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      });
  },
});

// const loginSlice = createSlice({
//   name: 'login',
//   initialState: initialState.user,
//   extraReducers: builder => {
//     builder
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.isLoggedIn = true;
//         state.isLoading = false;
//         state.name = action.payload.user.name;
//         state.email = action.payload.user.email;
//       })
//       .addCase(loginUser.pending, state => {
//         return { ...state, isLoading: true };
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         return { ...state, isLoading: false, error: action.payload };
//       });
//   },
// });

export const authReducer = authSlice.reducer;
export const { logoutUser } = authSlice.actions;
// export const loginReducer = loginSlice.reducer;
