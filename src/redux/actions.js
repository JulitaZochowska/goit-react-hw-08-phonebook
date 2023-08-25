import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer $[token]`;
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

export const fetchContacts = createAsyncThunk(
  'contacts/FETCH_ALL',
  async (_, thunkAPI) => {
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
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setFilter = createAction('filter/SET');
