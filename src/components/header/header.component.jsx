import React from 'react';

import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = ({currentUser, onRouteChange}) => (
  <div className='header'>
    <div className='options'>
      {currentUser ? (
        <div className='option' onClick={() => onRouteChange('signout')}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;