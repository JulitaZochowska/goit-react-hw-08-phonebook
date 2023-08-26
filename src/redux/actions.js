import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};
export const register = createAsyncThunk(
  'AUTH/REGISTER',
  async (registerData, thunkAPI) => {
    try {
      //'/users/signup' z dokumentacji backendu
      const response = await axios.post('/users/signup', registerData);
      setHeader(response.data.token);
      return response.data;
    } catch (error) {
      alert('Wrong data - please use other!');
      console.log(error, 'errror');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'AUTH/LOGIN',
  async (loginData, thunkAPI) => {
    try {
      //'/users/signup' z dokumentacji backendu
      const response = await axios.post('/users/login', loginData);
      setHeader(response.data.token);
      return response.data;
    } catch (error) {
      alert('Wrong data - please use other!');
      console.log(error, 'errror');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'AUTH/REFRESH_USER',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    setHeader(token);
    try {
      //'/users/signup' z dokumentacji backendu
      const response = await axios.get('/users/current');

      return response.data;
    } catch (error) {
      console.log(error, 'errror');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('AUTH/LOG_OUT', async (_, thunkAPI) => {
  try {
    //'/users/signup' z dokumentacji backendu
    const response = await axios.post('/users/logout');
    clearToken();
    return response.data;
  } catch (error) {
    console.log(error, 'errror');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchContacts = createAsyncThunk(
  'contacts/FETCH_ALL',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    setHeader(token);

    try {
      const { data } = await axios.get('/contacts');
      console.log(data, 'data');
      return data;
    } catch (error) {
      console.log(error, 'errror');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/ADD_CONTACT',
  async ({ name, number }, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    setHeader(token);

    try {
      const { data } = await axios.post('/contacts', { name, number });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/DELETE_CONTACT',
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    setHeader(token);

    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setFilter = createAction('filter/SET');
