import React from 'react';
import { Route } from 'react-router-dom';
import UserAddPage from '../containers/UserAddPage';
import UserListPage from '../containers/UserListPage';
import UserDetailsPage from '../containers/UserDetailsPage';
import UserUpdatePage from '../containers/UserUpdatePage';
import AboutPage from '../containers/AboutPage';


const Routes = () => (
  <div>
    <Route exact path="/users" component={UserListPage} />
    <Route exact path="/users/add/user" component={UserAddPage} />
    <Route exact path="/users/:idUser" component={UserDetailsPage} />
    <Route exact path="/users/update/:idUser" component={UserUpdatePage} />

    <Route exact path="/about" component={AboutPage} />
  </div>
);

export default Routes;
