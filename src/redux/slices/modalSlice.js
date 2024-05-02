import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState.isModalOpen,
  reducers: {
    modalOpen(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { modalOpen } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
