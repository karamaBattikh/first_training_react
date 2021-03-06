import React from 'react';
import { Query } from 'react-apollo';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';

import withUserListStyle from './withUserListStyle';
import UserDelete from './UserDelete';
import GetAllUser from '../../graphql/query/GetAllUser';

const UserList = ({ navigationTo, className, props }) => (
  <Query query={GetAllUser}>
    {({ loading, error, data }) => {
      if (loading) return <div> Loading ... </div>;
      if (error) return <div> Error .. </div>;
      const columns = [
        {
          Header: 'FirstName',
          accessor: 'firstName',
        },
        {
          Header: 'LastName',
          accessor: 'lastName',
        },
        {
          Header: 'Birthday',
          accessor: 'birthday',
        },
        {
          Header: 'email',
          accessor: 'email',
        },
        {
          Header: 'Job',
          accessor: 'job',
        },
        {
          Header: 'Action',
          Cell: (row) => (
            <div>
              <button
                type="button"
                onClick={() => navigationTo({ idUser: row.original.id, prop: props })}
              >
                Show
              </button>
              <button
                type="button"
                onClick={() => navigationTo({ idUser: row.original.id, path: 'update', prop: props })}
              >
                Edit
              </button>
              <UserDelete idUser={row.original.id} />
            </div>
          ),
        },
      ];
      return (
        <div className={className}>
          <h2 className="list-user__title"> List Of USers </h2>
          <div className="list-user__table--border">
            <button
              className="list-user__button--add"
              type="button"
              onClick={() => navigationTo({ path: 'add/user', prop: props })}
            >
              Add User
            </button>
            <ReactTable
              data={data.UserList}
              columns={columns}
              defaultPageSize={6}
            />
          </div>
        </div>
      );
    }}
  </Query>
);

UserList.propTypes = {
  props: PropTypes.object,
  navigationTo: PropTypes.func,
  className: PropTypes.string,
};

// default prop
UserList.defaultProps = {
  className: null,
};

export default withUserListStyle(UserList);
