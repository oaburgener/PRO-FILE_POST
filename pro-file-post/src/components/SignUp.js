import React from 'react';
import { Redirect } from 'react-router'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    //this.showAlert = this.showAlert.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    var data = {firstName: this.refs.first_name.value, lastName: this.refs.last_name.value, email: this.refs.email.value, password: this.refs.password.value}
console.log(data);
    this.props.SignUpVerify(data)
  }

  render() {
    console.log(this.props);
    return (
      <div style={{marginTop: '34px'}}>

      {this.props.toast ? <div>
        <p>'Please fill out all fields'</p>
          <button type = 'button' >ok</button>
      </div>: null}
      {this.props.data ? <Redirect to= '/login' />:
        <form onSubmit={this.handleSubmit}>
      <h2 className='signUp'>signup</h2>

      <label htmlFor="first_name">Enter your first name</label>
      <input id="first_name" ref = "first_name" name="first_name" type="first_name" required/>

      <label htmlFor="last_name">Enter your last name</label>
      <input id="last_name" ref = "last_name" name="last_name" type="last_name" required/>

      <label htmlFor="email">Enter your email</label>
      <input id="email" ref = "email" name="email" type="email" required/>

      <label htmlFor="username">Enter Password</label>
      <input id="username" ref = "password" name="username" type="password" required/>



      <button label="Submit">Submit</button>

    </form>}
    </div>
  )
  }

}

export default SignUp
