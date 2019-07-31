import React from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';

import DeleteUSer from '../../graphql/mutation/DeleteUser';
import GetAllUser from '../../graphql/query/GetAllUser';

const UserDelete = ({ idUser }) => (
  <Mutation mutation={DeleteUSer}>
    {(deleteUSer) => (
      <button
        type="button"
        onClick={() => {
          deleteUSer({
            refetchQueries: [{ query: GetAllUser }],
            variables: {
              id: idUser,
            },
          });
        }}
      >
        Delete
      </button>
    )}
  </Mutation>
);

UserDelete.propTypes = {
  idUser: PropTypes.string.isRequired,
};


export default UserDelete;
