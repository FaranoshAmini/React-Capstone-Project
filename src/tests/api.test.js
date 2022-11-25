import axios from 'axios';
// eslint-disable-next-line import/named
import fetchCoins, { url } from '../redux/Api/endpoint';

jest.mock('axios');

describe('Fetch Coin Data', () => {
  it('returns Coin Ranking', async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          name: 'Ethereum',
          image: '',
          rank: 2,
          currentPrice: '234',
        },
      ],
    });

    const result = await fetchCoins();

    expect(axios.get).toHaveBeenCalledWith(url);
    expect(result[0].rank).toEqual(2);
  });
});
