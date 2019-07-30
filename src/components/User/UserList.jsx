import React from 'react';
import { Query } from 'react-apollo';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';

import withUserListStyle from './withUserListStyle';

import GetAllUser from '../../graphql/query/GetAllUser';

const UserList = ({ className }) => (
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
          Cell: () => (
            <div>
              <button type="button">Show</button>
              <button type="button">Edit</button>
            </div>
          ),
        },
      ];
      return (
        <div className={className}>
          <h2 className="list-user__title"> List Of USers </h2>
          <div className="list-user__table--border">
            <button className="list-user__button--add" type="button">Add USer</button>
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
  className: PropTypes.string,
};

// default prop
UserList.defaultProps = {
  className: null,
};

export default withUserListStyle(UserList);
