import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { registerUser } from '../operations/operations';

const registerSlice = createSlice({
  name: 'register',
  initialState: initialState.user,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.name = action.payload.user.name;
        state.email = action.payload.user.email;
      })
      .addCase(registerUser.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(registerUser.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      });
  },
});

export const registerReducer = registerSlice.reducer;
