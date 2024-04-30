import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../operations/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          items: action.payload,
        };
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      })
      .addCase(addContact.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(addContact.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          items: [...state.items, action.payload],
        };
      })
      .addCase(addContact.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      })
      .addCase(deleteContact.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          items: state.items.filter(item => {
            return item.id !== action.payload.id;
          }),
        };
      })
      .addCase(deleteContact.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
