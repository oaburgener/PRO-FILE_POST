import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getArticles } from '../actions/actions_index.js'
import Body from '../components/Body.js'

const mapStateToProps = state => ({
  all_articles:state.splash.all_articles,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getArticles,
}, dispatch)

const BodyContainer = connect (
  mapStateToProps,null
)(Body)

export default BodyContainer
