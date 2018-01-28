import React, { Component } from 'react';
import './App.css';
import Body from './components/Body'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Body />
      </div>
    );
  }
}

export default App;
