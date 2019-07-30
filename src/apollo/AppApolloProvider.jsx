import React from 'react';
import { ApolloProvider } from 'react-apollo';

import AppApolloClient from './AppApolloClient';
import App from '../App';

const AppApolloProvider = () => (
  <ApolloProvider client={AppApolloClient}>
    <App />
  </ApolloProvider>
);

export default AppApolloProvider;
