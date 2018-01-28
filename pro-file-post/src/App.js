import React, { Component } from 'react';
import './App.css';

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
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
