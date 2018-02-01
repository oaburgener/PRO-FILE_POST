import React from 'react';
import { Redirect } from 'react-router'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    //this.showAlert = this.showAlert.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    var data = {email: this.refs.email.value, password: this.refs.password.value}
    this.props.logInVerify(data)
  }
//  showAlert(){
// this.props.toast  ? alert('username or password does not match'):null
//   }
  render() {
    return (
      <div className="login-form">

        {this.props.toast ? <div>
          <p>'username or password does not match'</p>
          <button type = 'button'>ok</button>
        </div>: null}
        {this.props.token ? <Redirect to= '/' />:
        <form onSubmit={this.handleSubmit}>
          <h1 className='signIn'>Welcome!</h1>
          <h3 id="login-large-text" className='signIn'>Login below.</h3>

          <label className="login-small-text" htmlFor="email">Email</label>
          <input id="email" ref = "email" name="email" type="email"/>

        <label className="login-small-text" htmlFor="username">Password</label>
        <input id="username" ref = "password" name="username" type="password"/>

        <button id="login-button" label="Submit">Submit</button>

      </form>}
    </div>
  )
  }

}

export default Login
