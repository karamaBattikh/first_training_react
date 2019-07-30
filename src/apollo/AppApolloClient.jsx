import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

import AppApolloResolver from './AppApolloResolvers';

const httpLink = new HttpLink({ uri: process.env.REACT_APP_URL });

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  resolvers: AppApolloResolver,
  defaults: {
    userInCache: {
      __typename: 'UserInCache',
      userId: '',
    },
  },
});

const link = ApolloLink.from([stateLink, httpLink]);


const AppApolloClient = new ApolloClient({
  link,
  cache,
});

export default AppApolloClient;
