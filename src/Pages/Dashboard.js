import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CoinCard from '../components/CoinCard';
import { getAllCoins } from '../redux/coins/coinsReducer';

const Dashboard = () => {
  const coinsData = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!coinsData.length) {
      dispatch(getAllCoins());
    }
  }, []);

  console.log(coinsData);

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
