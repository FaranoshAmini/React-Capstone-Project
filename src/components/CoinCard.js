import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CoinCard = (props) => {
  const { coin } = props;

  return (
    <div className="coin-card">
      <div className="coin-img">
        <img src={coin.image} alt="Bitcoin" />
      </div>
      <h3 className="coin-name">{coin.name}</h3>
      <p className="coin-rank">
        <span>Rank: </span>
        <span>{coin.rank}</span>
      </p>
      <p className="coin-price">
        <span>Price: </span>
        <span>
          $
          {coin.price}
        </span>
      </p>
      <div className="details">
        <Link to={`/details/${coin.id}`}>Details</Link>
      </div>
    </div>
  );
};

CoinCard.propTypes = {
  coin: PropTypes.array,
}.isRequired;

export default CoinCard;
