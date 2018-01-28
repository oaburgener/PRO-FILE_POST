import React, { Component } from 'react';
import './App.css';
import jumbotron from './components/jumbotron'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <div class = 'body' ></div>
            <div jumbotron ></div>
        </p>
      </div>
    );
  }
}

export default App;
