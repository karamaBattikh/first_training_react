import gql from 'graphql-tag';

const UpdateUserById = gql`
mutation(
    $idUser: ID!,
    $lastName: String,
    $firstName: String,
    $job: String,
    $email: String,
    $birthday: String
    ){
    EditUser(idUser: $idUser, lastName: $lastName, firstName: $firstName, job: $job, email: $email, birthday: $birthday)
    {
      firstName
      lastName
      birthday
      email
      job
    }
    saveInCache(idUser: $id) @client
 }
`;

export default UpdateUserById;
