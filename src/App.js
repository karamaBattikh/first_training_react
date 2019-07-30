import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './App.css';
import 'react-table/react-table.css';
import Header from './components/Header';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes />
  </BrowserRouter>
);
export default App;
