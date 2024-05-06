// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { initialState } from './redux/initialState';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const setToken = token => {
  axios.defaults.headers.common['Authorization'] = token;
};
const unsetToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

export async function fetchAll() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}

export async function register(credentials, thunkAPI) {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    console.log('🚀 ~ register ~ data :', data);
    setToken(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
}

export async function login(credentials, thunkAPI) {
  try {
    const { data } = await axios.post('/users/login', credentials);
    console.log('🚀 ~ login ~ data :', data);
    setToken(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
}

export async function logout(thunkAPI) {
  try {
    unsetToken();
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
}

export async function requestCurrentUser(token, thunkAPI) {
  try {
    setToken(token);
    const { data } = await axios.get('/users/current');

    return data;
  } catch (error) {
    console.log('🚀 ~ requestCurrentUser ~ error:', error.message);

    return thunkAPI.rejectWithValue(error.message);
  }
}
