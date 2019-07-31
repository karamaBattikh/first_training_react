import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import GetUserById from '../graphql/query/GetUSerById';
import UpdateUser from '../components/User/UpdateUser';
import { navigationTo } from '../utils/NavigationUtils';

const UserUpdatePage = (props) => {
  const { match: { params } } = props;
  const { idUser: id } = params;
  return (
    <Query
      query={GetUserById}
      variables={{ idUser: id }}
    >
      {({ loading, error, data }) => {
        if (loading) return <div> Loading ... </div>;
        if (error) return <div> Error ... </div>;
        const { UserById } = data;
        return (
          <UpdateUser
            navigationTo={navigationTo}
            id={id}
            props={props}
            userData={UserById}
          />
        );
      }}
    </Query>
  );
};

UserUpdatePage.propTypes = {
  match: PropTypes.object,
};

export default withRouter(UserUpdatePage);
