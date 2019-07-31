import React from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';

import AddUser from '../../graphql/mutation/AddUser';
import GetAllUser from '../../graphql/query/GetAllUser';
import { navigationTo } from '../../utils/NavigationUtils';
import withUserAddStyle from './withAddUserStyle';

const UserAdd = ({ className, props }) => {
  const user = {};
  return (
    <Mutation mutation={AddUser}>
      {(addUser) => (
        <div className={className}>
          <h2 className="form-add__title"> add User </h2>
          <form
            className="form-add"
            onSubmit={(e) => {
              e.preventDefault();
              addUser({
                refetchQueries: [{ query: GetAllUser }],
                variables: {
                  firstName: user.newFirstName.value,
                  lastName: user.newLastName.value,
                  birthday: user.newBirthday.value,
                  job: user.newJob.value,
                  email: user.newEmail.value,
                },
              });
              navigationTo({ prop: props });
            }}
          >
            <div className="form-add__input">
              <label htmlFor="firstName">
                {' FirstName : '}
              </label>
              <input name="firstName" ref={(firstName) => { user.newFirstName = firstName; }} />
            </div>

            <div className="form-add__input">
              <label htmlFor="lastName">
                {' LastName : '}
              </label>
              <input ref={(lastName) => { user.newLastName = lastName; }} />
            </div>

            <div className="form-add__input">
              <label htmlFor="birthday">
                {' Birthday : '}
              </label>
              <input ref={(birthday) => { user.newBirthday = birthday; }} />
            </div>

            <div className="form-add__input">
              <label htmlFor="job">
                {' Job : '}
              </label>
              <input ref={(job) => { user.newJob = job; }} />
            </div>

            <div className="form-add__input">
              <label htmlFor="email">
                {' Email : '}
              </label>
              <input ref={(email) => { user.newEmail = email; }} />
            </div>

            <div className="form-add__button">
              <button className="form-add__button--submit" type="submit"> Add </button>
              <button className="form-add__button--reset" type="button"> Annuler </button>
            </div>
          </form>
        </div>
      )}
    </Mutation>
  );
};


UserAdd.propTypes = {
  className: PropTypes.string,
  props: PropTypes.object,
};

// default prop
UserAdd.defaultProps = {
  className: null,
};

export default withUserAddStyle(UserAdd);
