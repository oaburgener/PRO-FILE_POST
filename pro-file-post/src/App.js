import React, { Component } from 'react';
import './App.css';

import jumbotron from './components/jumbotron'



import Navbar from './components/Navbar'
import Body from './components/Body'




import Footer from './components/Footer'



class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />

        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <div class = 'body' ></div>
            <div jumbotron ></div>
        </p>
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
