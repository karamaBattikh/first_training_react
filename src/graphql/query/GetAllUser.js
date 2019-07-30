import gql from 'graphql-tag';

const GetAllUser = gql`
{
    UserList{
      id
      firstName
      lastName
      birthday
      email
      job
    }
  }
`;

export default GetAllUser;
