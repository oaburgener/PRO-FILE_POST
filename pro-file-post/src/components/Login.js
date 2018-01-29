import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const Login = () => (

  <div>
    <h2 className = 'signIn'>login/signup</h2>

    <TextField
      id="text-field-default"
      hintText="email address "
      floatingLabelText="username"

    //  defaultValue="email address"
     /><br />

    <TextField
      hintText="Password"
      floatingLabelText="Password"
      type="password"
    
    /><br />






      <RaisedButton label="Submit" style={style} />
      <RaisedButton label="Sign Up" primary={true} style={style} />



  </div>
);

export default Login
