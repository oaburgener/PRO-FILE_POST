import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};
const handleUserChange = (event) => {
let username = event.target.value
}
const handlePwordChange = (event) => {
  let password = event.targetvalue
  console.log(password);
}
const Login = () => (

  <div>
    <h2 className = 'signIn'>login/signup</h2>

    <TextField
      id="text-field-default"
      hintText="email address "
      floatingLabelText="username"
      onChange = {handleUserChange}

    //  defaultValue="email address"
     /><br />

    <TextField
      hintText="Password"
      floatingLabelText="Password"
      type="password"
      onChange = {handlePwordChange}
    /><br />






      <RaisedButton label="Submit" style={style} />
      <RaisedButton label="Sign Up" primary={true} style={style} />



  </div>
);

export default Login
