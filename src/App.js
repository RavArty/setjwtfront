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
  componentDidMount() {
    const token = window.sessionStorage.getItem('token');
    if (token) {
      fetch('http://localhost:3000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      })
        .then(response => response.json())
        .then(data => {
            this.loadUser(data.email)
          })
        .catch(console.log)
    }
  }

  loadUser = (data) => {
    this.setState({currentUser: data})
  }
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({currentUser: ''})
    }
  }

  render(){
    const {currentUser} = this.state
    return (
      <div>
        <Header currentUser={this.state.currentUser} onRouteChange={this.onRouteChange}/>
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
