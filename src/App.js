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

  loadUser = (data) => {
    this.setState({currentUser: data.email})
  }

  render(){
    const {currentUser} = this.state
    console.log('currenUser: ', currentUser)
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path='/' render={() => <HomePage currentUser={currentUser} />}/>
        <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage loadUser={this.loadUser}/>
              )
            }
          />
        </Switch>
      </div>
    );
  }

}
  


export default App;
