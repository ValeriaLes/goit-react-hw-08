import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const goitAPI = axios.create({
    baseURL: 'https://connections-api.goit.global',
  });

  const setAuthHeader = token => {
    goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  const removeAuthHeader = () => {
    goitAPI.defaults.headers.common.Authorization = ``;
  };


  export const registerUser = createAsyncThunk('auth/register', async (body, thunkAPI) => {
    try {
      removeAuthHeader();
        const response = await goitAPI.post('/users/signup', body);
        setAuthHeader(response.data.token)
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
        
    }
  })

  export const loginUser = createAsyncThunk('auth/login', async (body, thunkAPI) => {
   
    try {
     removeAuthHeader()
        const response = await goitAPI.post('/users/login', body);
        setAuthHeader(response.data.token)
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
        
    }
  })

  export const logoutUser = createAsyncThunk('auth/logout', async (_, thunkAPI)=> {
    try {
        await goitAPI.post('/users/logout');
        removeAuthHeader();
     
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
  })

  export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {

   

    try {
        const savedToken = thunkAPI.getState().auth.token;

        if (!savedToken) {
          return thunkAPI.rejectWithValue('No token available');
        }
        setAuthHeader(savedToken)
      
        const response = await goitAPI.get('/users/current');
       
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
        
    }
  })