import gql from 'graphql-tag';

const AddUser = gql`
mutation(
    $firstName: String!,
    $lastName: String!,
    $birthday: String,
    $email: String,
    $job: String
){
   AddUser(firstName: $firstName, lastName: $lastName, birthday: $birthday, email: $email, job: $job)
   {
       firstName
       lastName
   }
}
`;

export default AddUser;
