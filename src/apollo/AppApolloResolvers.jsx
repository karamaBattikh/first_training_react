import gql from 'graphql-tag';

export default {
  Query: {
    readFromCache: (obj, args, { cache }) => {
      const query = gql`
            query {
              userInCache {
                userId
              }
            }`;
      const userId = cache.readQuery({ query });
      return userId;
    },
  },
  Mutation: {
    saveInCache: (_, { idUser }, { cache }) => {
      const newID = { userId: idUser, __typename: 'UserInCache' };
      const data = { userInCache: newID };
      cache.writeData({ data });
      return cache.data.userInCache;
    },
  },
};
