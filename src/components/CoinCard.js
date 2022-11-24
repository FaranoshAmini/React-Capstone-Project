import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CoinCard = ({ coin }) => {
  const title = 'Test';

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
        <Link to="/">Details</Link>
      </div>
    </div>
  );
};

CoinCard.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    rank: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
};

export default CoinCard;
