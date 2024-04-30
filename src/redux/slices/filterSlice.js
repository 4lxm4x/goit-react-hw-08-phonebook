import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    filter(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { filter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
