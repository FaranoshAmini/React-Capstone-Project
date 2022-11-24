import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchCoins from '../Api/endpoint';

const FETCH_COIN_DATA = createAction('coins/FETCH_COIN_DATA');
const intialState = [];

export const getAllCoins = createAsyncThunk(FETCH_COIN_DATA, async () => {
  const coins = await fetchCoins();
  return coins;
});
