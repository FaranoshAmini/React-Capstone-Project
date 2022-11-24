import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCoins } from '../redux/coins/coinsReducer';

const Dashboard = () => {
  const coinsData = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!coinsData.length) {
      dispatch(getAllCoins());
    }
  }, []);

  return (
    <section>
      <h2>Dashboard</h2>
    </section>
  );
};

export default Dashboard;
