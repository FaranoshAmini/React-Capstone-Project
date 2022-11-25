import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchCoins from '../Api/endpoint';

const FETCH_COIN_DATA = createAction('coins/FETCH_COIN_DATA');
const initialState = [];

export const getFilteredData = createAsyncThunk(FETCH_COIN_DATA, async () => {
  const data = await fetchCoins();
  const coins = data.map((coin) => ({
    id: coin.id,
    name: coin.name,
    image: coin.image,
    rank: coin.market_cap_rank,
    price: coin.current_price,
  }));
  return coins;
});

const coinReducer = createSlice({
  name: 'coins',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getFilteredData.fulfilled, (state, action) => action.payload);
  },
});

export default coinReducer.reducer;
