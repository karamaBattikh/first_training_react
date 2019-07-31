import React from 'react';
import { withRouter } from 'react-router';

import UserAdd from '../components/User/AddUser';

const UserAddPage = (props) => (
  <UserAdd props={props} />
);

export default withRouter(UserAddPage);
