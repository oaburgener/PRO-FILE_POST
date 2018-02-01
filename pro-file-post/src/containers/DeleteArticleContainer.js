import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getArticleId } from '../actions/actions_index.js'
import Article from '../components/Article.js'
import {delArticle} from '../actions/actions_index.js'


const mapStateToProps = state => ({
  article:state.article.data,
  body: state.article.body,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getArticleId,
  delArticle
}, dispatch)

const DeleteArticleContainer = connect (
  mapStateToProps,null
)(Article)

export default DeleteArticleContainer
