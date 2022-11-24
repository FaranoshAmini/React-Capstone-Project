import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CoinCard from '../components/CoinCard';
import { getFilteredData } from '../redux/coins/coinsReducer';

const Dashboard = () => {
  const coinsData = useSelector((state) => state.filteredCoins);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!coinsData.length) {
      dispatch(getFilteredData());
    }
  }, []);

  return (
    <section className="coins-container">
      {
        coinsData
            && coinsData.map((coin) => <CoinCard key={coin.id} coin={coin} />)
      }
    </section>
  );
};

export default Dashboard;
