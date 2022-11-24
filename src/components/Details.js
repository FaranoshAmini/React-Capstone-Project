/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllData } from '../redux/coins/allCoinsReducer';

const Details = () => {
  const { id } = useParams();
  const coinsData = useSelector((state) => state.allCoins);
  const dispatch = useDispatch();
  const coin = coinsData.find((coin) => coin.id === id);
  useEffect(() => {
    if (!coinsData.length) {
      dispatch(getAllData());
    }
  }, []);
  return (
    <section className="coin-detail">
      {coin && (
        <>
          <div className="detail-img">
            <img src={coin.image} alt={coin.name} />
          </div>
          <h3 className="detail-name">{coin.name}</h3>
          <table>
            <tr>
              <th>Symbol</th>
              <td>{coin.symbol}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>$ {coin.current_price}</td>
            </tr>
            <tr>
              <th>Rank</th>
              <td>{coin.market_cap_rank}</td>
            </tr>
            <tr>
              <th>Total Volume</th>
              <td>{coin.total_volume}</td>
            </tr>
            <tr>
              <th>Circulating Supply</th>
              <td>{coin.circulating_supply}</td>
            </tr>
            <tr>
              <th>Total supply</th>
              <td>{coin.total_supply}</td>
            </tr>
          </table>
        </>
      )}
    </section>
  );
};
export default Details;
