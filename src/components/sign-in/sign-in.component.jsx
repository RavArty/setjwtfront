import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    fetch('http://localhost:3000/signin', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      })
        .then(response => response.json())
        .then(data => {
          this.props.loadUser(data)
         // console.log('here')
         // console.log('data: ', data)
          // if (data && data.success === "true") {
          //   this.saveAuthTokenInSessions(data.token)
          //   this.props.loadUser(data.user)
          //   this.props.onRouteChange('home');
          // }
        })
        .catch(console.log)
        console.log('end')
  //  this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <CustomButton type='submit'> Sign in </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;