import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './App.css';
import Menu from './components/Menu';

const App = () => (
  <BrowserRouter>
    <Menu />
    <Routes />
  </BrowserRouter>
);
export default App;
