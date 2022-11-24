import { configureStore } from '@reduxjs/toolkit';
import allCoinsReducer from './coins/allCoinsReducer';
import coinsReducer from './coins/coinsReducer';

const store = configureStore({
  reducer: {
    filteredCoins: coinsReducer,
    allCoins: allCoinsReducer,
  },
});

export default store;
