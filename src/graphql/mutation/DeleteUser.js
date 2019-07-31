import gql from 'graphql-tag';

const DeleteUser = gql`
mutation($id: String!) {
    DeleteUser(idUser: $id)
}
`;

export default DeleteUser;
