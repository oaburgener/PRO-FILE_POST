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
          <button type = 'button' >ok</button>
      </div>: null}
      {this.props.token ? <Redirect to= '/' />:
        <form onSubmit={this.handleSubmit}>
      <h2 className='signIn'>login/signup</h2>

      <label htmlFor="email">Enter your email</label>
      <input id="email" ref = "email" name="email" type="email"/>

      <label htmlFor="username">Enter Password</label>
      <input id="username" ref = "password" name="username" type="password"/>



      <button label="Submit">Submit</button>


    </form>}
    </div>
  )
  }

}

export default Login
