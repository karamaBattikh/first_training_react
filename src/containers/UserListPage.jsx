import React from 'react';
import { withRouter } from 'react-router';
import UserList from '../components/User/UserList';
import { navigationTo } from '../utils/NavigationUtils';

const UserListPage = (props) => (
  <UserList
    navigationTo={navigationTo}
    props={props}
  />
);

export default withRouter(UserListPage);
