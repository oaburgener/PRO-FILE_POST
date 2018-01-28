import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
<<<<<<< HEAD
import jumbotron from './components/jumbotron'
=======
<<<<<<< HEAD
=======

>>>>>>> b9cc3d8f2546d8dc2754c88b93de8d527f3a2870
import Navbar from './components/Navbar'

import Body from './components/Body'
<<<<<<< HEAD
>>>>>>> body
>>>>>>> 961809ae31826d87017764293d1fe58bdb1be8a2
=======


import Footer from './components/Footer'
>>>>>>> b9cc3d8f2546d8dc2754c88b93de8d527f3a2870

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
