import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';

import GetUserById from '../../graphql/query/GetUSerById';
import withUsersDetailStyle from './withUserDetailStyle';

const UserDetails = ({
  id,
  props,
  navigationTo,
  className,
}) => (
  <Query
    query={GetUserById}
    variables={{ idUser: id }}
  >
    {({ loading, error, data }) => {
      console.log('.. match ..', id);
      if (loading) return <div> Loading ... </div>;
      if (error) return <div> Error ... </div>;
      console.log('User By Id', data);
      return (
        <div className={className}>
          <h2 className="user-title"> Detail of User </h2>
          <div className="user__detail">
            <span>
              <h3 className="user__detail-item">FirstName :</h3>
              <h4>{data.UserById.firstName}</h4>
            </span>

            <span>
              <h3 className="user__detail-item">LastName :</h3>
              <h4>{data.UserById.lastName}</h4>
            </span>

            <span>
              <h3 className="user__detail-item">Birthday :</h3>
              <h4>{data.UserById.birthday}</h4>
            </span>

            <span>
              <h3 className="user__detail-item">Email :</h3>
              <h4>{data.UserById.email}</h4>
            </span>

            <span>
              <h3 className="user__detail-item">Job :</h3>
              <h4>{data.UserById.job}</h4>
            </span>


            <div>
              <button
                type="button"
                className="user__detail-button"
                onClick={() => navigationTo({ idUser: id, prop: props, path: 'update' })}
              >
                Update
              </button>
              <button
                type="button"
                className="user__detail-button"
              >
                ListOfUsers
              </button>
            </div>
          </div>
        </div>
      );
    }}
  </Query>
);

UserDetails.propTypes = {
  navigationTo: PropTypes.func,
  props: PropTypes.object,
  id: PropTypes.string,
  className: PropTypes.string,
};

export default withUsersDetailStyle(UserDetails);
