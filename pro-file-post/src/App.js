import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Jumbotron from './components/jumbotron'
import Navbar from './components/Navbar'
import {pinkA200} from 'material-ui/styles/colors';
// import Body from './components/Body'
import Footer from './components/Footer'
import BodyContainer from './containers/BodyContainer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getArticles } from './actions/actions_index.js'
import GridListExampleSimple from './components/SmallCard'
import Login from './components/Login'
import SubmitButton from './components/Login'


const muiTheme = getMuiTheme({
  palette: {
    textColor: pinkA200,
  },
  appBar: {
    height: 50,
  },
});


class App extends Component {


  componentDidMount() {
    this.props.getArticles()
  }


  render() {
    return (
      <div className="App">

        <MuiThemeProvider muiTheme={muiTheme}>
          <Navbar />
          <Jumbotron />

        <BodyContainer />
        <GridListExampleSimple />

        {/* <Body /> */}

        <Footer />
        <Login />
        <SubmitButton />
  </MuiThemeProvider>
      </div>

    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getArticles,
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(App)
