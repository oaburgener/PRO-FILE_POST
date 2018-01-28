import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Jumbotron from './components/Jumbotron'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'



class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />

<MuiThemeProvider>
        <Jumbotron />
  </MuiThemeProvider>
        <Body />
        <Footer />

      </div>

    );
  }
}

export default App;
