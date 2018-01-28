import React from 'react'
import { connect } from 'react-redux'
import Body from '../components/Body.js'

const mapStateToProps = state => ({
  all_articles:state.splash.all_articles,
})

const BodyContainer = connect (
  mapStateToProps,null
)(Body)

export default BodyContainer
