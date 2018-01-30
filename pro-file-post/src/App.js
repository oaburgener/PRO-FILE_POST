import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Jumbotron from './components/jumbotron'
import Navbar from './components/Navbar'
import About from './components/About'
import {pinkA200} from 'material-ui/styles/colors';
// import Body from './components/Body'
import Footer from './components/Footer'
import BodyContainer from './containers/BodyContainer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getArticles } from './actions/actions_index.js'
import JumbotronContainer from './containers/JumbotronContainer'
import FilterContainer from './containers/FilterContainer'
import Filters from './components/Filter'
import ArticleContainer from './containers/ArticleContainer'
import SmallCard from './components/SmallCard'
import Login from './components/Login'
import SubmitButton from './components/Login'

class App extends Component {

  componentDidMount() {
    this.props.getArticles()
  }

  render() {
    return (
      <Router>
        <div className="App">

          <MuiThemeProvider>
            <Navbar />
            <Route exact path="/" render={() => (
              <div className="container-fluid splash">
                <JumbotronContainer />
                <Filters />
                <BodyContainer />
              </div>
            )}/>

            <Route exact path ="/article/:id" render={() => (
              <div>
                <ArticleContainer />
              </div>
            )}/>

          <Route exact path ="/about" render={() => (
            <div>
              <About />
            </div>
          )}/>

          <Route exact path ="/login" render={() => (
            <div>
              <Login />
            </div>
          )}/>

          <Footer />
        </MuiThemeProvider>

        </div>
      </Router>

    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getArticles,
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(App)
