import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://api-phonebook.onrender.com/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registration = createAsyncThunk(
  'auth/registration',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/register', credentials);
      setAuthHeader(res.data.token);
      toast.success('Registration success');
      return res.data;
    } catch (error) {
      toast.error('Something went wrong');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      toast.success(`Hello ${res.data.user.email}`);
      return res.data;
    } catch (error) {
      toast.error('Login or password is incorrect');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
    toast.success('Logout success');
  } catch (error) {
    toast.error('Something went wrong');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;

    if (!token) {
      return thunkAPI.rejectWithValue('No valid token');
    }

    setAuthHeader(token);

    try {
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      toast.error(`Something went wrong`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
