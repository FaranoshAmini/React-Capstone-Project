import axios from 'axios';

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=1h';

const fetchCoins = async () => {
  const res = await axios.get(url);
  const { data } = res;
  const coins = data.map((coin) => ({
    id: coin.id,
    name: coin.name,
    image: coin.image,
    rank: coin.market_cap_rank,
    price: coin.current_price,
  }));
  return coins;
};

export default fetchCoins;
