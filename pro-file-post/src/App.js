import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Navbar />
        </MuiThemeProvider>
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
