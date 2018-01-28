import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Jumbotron from './components/jumbotron'
import Navbar from './components/Navbar'
// import Body from './components/Body'
import Footer from './components/Footer'
import BodyContainer from './containers/BodyContainer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getArticles } from './actions/actions_index.js'
import JumbotronContainer from './containers/JumbotronContainer'


class App extends Component {


  componentDidMount() {
    this.props.getArticles()
  }


  render() {
    return (
      <div className="App">
        <Navbar />
        <MuiThemeProvider>
            <JumbotronContainer />
        </MuiThemeProvider>
        <BodyContainer />





        {/* <Body /> */}

        <Footer />

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
