import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async formData => {
  try {
    const { data } = await axios.post('/users/signup', formData);
    token.set(data.token);
    return data;
  } catch (e) {
    console.log('e.message :>> ', e.message);
  }
});

export const logIn = createAsyncThunk('auth/login', async formData => {
  try {
    const { data } = await axios.post('/users/login', formData);
    token.set(data.token);
    return data;
  } catch (e) {
    console.log('e.message :>> ', e.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (e) {
    console.log(e);
  }
});
