import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { registerUser } from '../operations/operations';

const registerSlice = createSlice({
  name: 'register',
  initialState: initialState.user,
  extraReducers: builder => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      //   state.isLoggedIn = true;
      //   state.name = action.payload.name;
      //   state.email = action.payload.email;
    });
  },
});

export const registerReducer = registerSlice.reducer;
