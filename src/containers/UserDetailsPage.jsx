import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import { navigationTo } from '../utils/NavigationUtils';
import UserDetail from '../components/User/UserDetail';

const UserDetailsPage = (props) => {
  const { match: { params } } = props;
  const { idUser } = params;
  return (
    <UserDetail
      id={idUser}
      navigationTo={navigationTo}
      props={props}
    />
  );
};

UserDetailsPage.propTypes = {
  match: PropTypes.object,
};

export default withRouter(UserDetailsPage);
