import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path='/' render={(props) => <HomePage {...props} />}/>
        <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }

}
  


export default App;
