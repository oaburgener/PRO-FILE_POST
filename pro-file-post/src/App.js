import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
// import Body from './components/Body'
import Footer from './components/Footer'
import BodyContainer from './containers/BodyContainer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getArticles } from './actions/actions_index.js'
import Filters from './components/Filter'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {

  componentDidMount() {
    this.props.getArticles()
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Navbar />

          <Filters />
          <BodyContainer />
          {/* <Body /> */}
          <Footer />
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
