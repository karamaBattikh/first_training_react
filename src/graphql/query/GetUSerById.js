import gql from 'graphql-tag';

const GetUserById = gql`
query($idUser: String!){
    UserById(idUser: $idUser)
    {
      id
      firstName
      lastName
      birthday
      email
      job
    }
  }
`;

export default GetUserById;
