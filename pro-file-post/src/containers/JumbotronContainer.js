import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getArticles } from '../actions/actions_index.js'
import Jumbotron from '../components/jumbotron.js'

const mapStateToProps = state => ({
  trending_articles:state.splash.trending_articles,
})


const JumbotronContainer = connect (
  mapStateToProps,null
)(Jumbotron)

export default JumbotronContainer
