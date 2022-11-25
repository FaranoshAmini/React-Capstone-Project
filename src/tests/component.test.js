import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Dashboard from '../Pages/Dashboard';
import CoinCard from '../components/CoinCard';
import NavBar from '../components/NavBar';
import Details from '../components/Details';

describe('UI Tests', () => {
  it('should render Dashboard', () => {
    const tree = render(
      <Provider store={store}>
        <Dashboard />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('contains an image and renders CoinCard component', () => {
    const coins = {
      name: 'Ethereum',
      image: '',
      rank: 2,
      currentPrice: '234',
    };
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <CoinCard coin={coins} />
        </BrowserRouter>
      </Provider>,
    );
    const image = screen.getByRole('img');
    expect(image).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });

  it('should render NavBar', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render Details Component', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
