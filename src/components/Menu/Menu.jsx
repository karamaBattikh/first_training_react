import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import withMenuStyle from './withMenuStyle';

const Menu = ({ className }) => (
  <div className={className}>
    <Link href=" " to="/users" className="menu-item">Users</Link>
    <Link href=" " to="/about" className="menu-item">About</Link>
  </div>
);

Menu.propTypes = {
  className: PropTypes.string,
};

// default prop
Menu.defaultProps = {
  className: null,
};


export default withMenuStyle(Menu);
