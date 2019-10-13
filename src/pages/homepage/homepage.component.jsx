import React from 'react';

import './homepage.styles.scss';

class HomePage extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log('user: ', this.props.currentUser)
    return(
      <div className='homepage'>
        {this.props.currentUser ? (
          <h1>Hello, {this.props.currentUser}</h1>
        ) : (
          <h1>You are not logged in</h1>
          
        )
        }
      </div>
    )
  }
  
};

export default HomePage;