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
      console.log('---------idUser---------', idUser);
      const newID = { userId: idUser, __typename: 'UserInCache' };
      console.log('---------newID---------', newID);
      const data = { userInCache: newID };
      console.log('---------Cache---------', cache);
      cache.writeData({ data });
      console.log('---------Cache---------', cache);
      return cache.data.userInCache;
    },
  },
};
