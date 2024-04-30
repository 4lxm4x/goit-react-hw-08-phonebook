import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {

      const response = await API.fetchAll();

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await API.addContact(contact);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, rejectWithValue) => {
    try {
      const response = await API.deleteContact(id);
      return response;
    } catch (error) {
      return rejectWithValue(error);

    }
  }
);
