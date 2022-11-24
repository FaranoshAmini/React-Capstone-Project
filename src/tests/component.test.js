import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Dashboard from '../Pages/Dashboard';
import CoinCard from '../components/CoinCard';
import NavBar from '../components/NavBar';
import Details from '../components/Details';