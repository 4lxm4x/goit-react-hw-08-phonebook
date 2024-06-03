import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { Notify } from 'notiflix';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../operations/operations';

Notify.init({
  position: 'left-bottom',
});

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
        Notify.success('Contact successfully added');
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
        Notify.info('Successfully deleted');
        return {
          ...state,
          isLoading: false,
          items: state.items.filter(item => {
            return item.id !== action.payload.id;
          }),
        };
      })
      .addCase(deleteContact.rejected, (state, action) => {
        const error = action.payload;

        if (error.response.status === 500) {
          Notify.failure('Server error. Try again later');
        }
        return { ...state, isLoading: false, error: action.payload };
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
