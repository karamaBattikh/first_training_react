import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import withHeaderStyle from './withHeaderStyle';

const Header = ({ className }) => (
  <div className={className}>
    <div className="header__Logo">
      <img src="/react_logo.png" alt="" />
    </div>
    <Menu />
  </div>
);

Header.propTypes = {
  className: PropTypes.string,
};


export default withHeaderStyle(Header);
