import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchCoins from '../Api/endpoint';

const FETCH_COIN_DATA = createAction('coins/FETCH_COIN_DATA');
const initialState = [];

export const getAllCoins = createAsyncThunk(FETCH_COIN_DATA, async () => {
  const coins = await fetchCoins();
  return coins;
});

const coinReducer = createSlice({
  name: 'coins',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllCoins.fulfilled, (state, action) => action.payload);
  },
});

export default coinReducer.reducer;
