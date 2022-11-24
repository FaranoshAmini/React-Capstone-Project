import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchCoins from '../Api/endpoint';

const FETCH_ALL_DATA = createAction('coins/FETCH_ALL_DATA');
const initialState = [];

export const getAllData = createAsyncThunk(FETCH_ALL_DATA, async () => {
  const data = await fetchCoins();
  return data;
});

const coinReducer = createSlice({
  name: 'coins',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllData.fulfilled, (state, action) => action.payload);
  },
});

export default coinReducer.reducer;
