import React from 'react';

import './homepage.styles.scss';

const HomePage = ({currentUser}) => (
  <div className='homepage'>
    {currentUser ? (
      <h1>You are not logged in</h1>
    ) : (
      <h1>Hello, {currentUser}</h1>
    )
    }
  </div>
);

export default HomePage;