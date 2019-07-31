import React from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';

import UpdateUserById from '../../graphql/mutation/UpdateUserById';
import GetAllUser from '../../graphql/query/GetAllUser';

import withUserAddStyle from './withAddUserStyle';

const UserUpdate = ({
  id,
  props,
  navigationTo,
  className,
  userData,
}) => {
  const user = userData;
  return (
    <Mutation mutation={UpdateUserById}>
      {(userUpdate) => (
        <div className={className}>
          <h2 className="form-add__title"> Update User </h2>
          <form
            className="form-add"
            onSubmit={(e) => {
              e.preventDefault();
              userUpdate({
                refetchQueries: [{ query: GetAllUser }],
                variables: {
                  idUser: id,
                  firstName: user.firstName.value,
                  lastName: user.lastName.value,
                  birthday: user.birthday.value,
                  job: user.job.value,
                  email: user.email.value,
                },
              });
              navigationTo({ prop: props });
            }}
          >
            <div className="form-add__input">
              <label htmlFor="firstName">
                {' FirstName : '}
              </label>
              <input
                name="firstName"
                defaultValue={user.firstName}
                ref={(firstName) => { user.firstName = firstName; }}
              />
            </div>

            <div className="form-add__input">
              <label htmlFor="lastName">
                {' LastName : '}
              </label>
              <input
                defaultValue={user.lastName}
                ref={(lastName) => { user.lastName = lastName; }}
              />
            </div>

            <div className="form-add__input">
              <label htmlFor="birthday">
                {' Birthday : '}
              </label>
              <input
                defaultValue={user.birthday}
                ref={(birthday) => { user.birthday = birthday; }}
              />
            </div>

            <div className="form-add__input">
              <label htmlFor="job">
                {' Job : '}
              </label>
              <input
                defaultValue={user.job}
                ref={(job) => { user.job = job; }}
              />
            </div>

            <div className="form-add__input">
              <label htmlFor="email">
                {' Email : '}
              </label>
              <inpu
                defaultValue={user.email}
                ref={(email) => { user.email = email; }}
              />
            </div>

            <div className="form-add__button">
              <button
                className="form-add__button--submit"
                type="submit"
              >
                Update
              </button>
              <button
                className="form-add__button--reset"
                type="button"
                onClick={() => navigationTo({ prop: props })}
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}
    </Mutation>
  );
};

UserUpdate.propTypes = {
  id: PropTypes.string.isRequired,
  props: PropTypes.object,
  navigationTo: PropTypes.func,
  className: PropTypes.string,
  userData: PropTypes.object,
};


export default withUserAddStyle(UserUpdate);
