import React from 'react';
import PropTypes from 'prop-types';

import withUserAddStyle from './withAddUserStyle';

const UserAdd = ({ className }) => {
  const user = {};
  return (
    <div className={className}>
      <h2 className="form-add__title"> add User </h2>
      <form
        className="form-add"
        onSubmit={(e) => {
          e.preventDefault();
          console.log('--user--', user);
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
  );
};


UserAdd.propTypes = {
  className: PropTypes.string,
};

// default prop
UserAdd.defaultProps = {
  className: null,
};

export default withUserAddStyle(UserAdd);
