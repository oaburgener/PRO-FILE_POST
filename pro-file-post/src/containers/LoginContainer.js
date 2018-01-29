import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Login from '../components/Login.js'


const mapStateToProps = state => ({
  trending_articles:state.splash.trending_articles,
})


// const LoginContainer = connect (
//   mapStateToProps,null
// )()

//export default LoginContainer
