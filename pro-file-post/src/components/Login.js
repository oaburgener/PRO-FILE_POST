import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    var data = {email: this.refs.email.value, password: this.refs.password.value}
    this.props.logInVerify(data)
  }
  render() {
    return (<form onSubmit={this.handleSubmit}>
      <h2 className='signIn'>login/signup</h2>

      <label htmlFor="email">Enter your email</label>
      <input id="email" ref = "email" name="email" type="email"/>

      <label htmlFor="username">Enter Password</label>
      <input id="username" ref = "password" name="username" type="password"/>



      <button label="Submit">Submit</button>
      <button label="Sign Up">Sign up</button>

    </form>)
  }
}

export default Login
