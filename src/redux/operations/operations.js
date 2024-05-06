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
  async (id, { rejectWithValue }) => {
    try {
      const response = await API.deleteContact(id);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const registerUser = createAsyncThunk(
  'register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await API.register(credentials);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await API.login(credentials);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const requestCurrentUser = createAsyncThunk(
  'requestCurrentUser',
  async (token, { rejectWithValue }) => {
    try {
      const response = await API.requestCurrentUser(token);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
