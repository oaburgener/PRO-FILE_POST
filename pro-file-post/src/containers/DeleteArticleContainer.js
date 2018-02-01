import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getArticlesDelete } from '../actions/actions_index.js'
import DeleteArticle from '../components/DeleteArticle.js'

const mapStateToProps = state => ({
  DeleteArticle:state.article.article,
  body: state.article.body,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getArticlesDelete,
}, dispatch)

const DeleteArticleContainer = connect (
  mapStateToProps,null
)(Article)

export default DeleteArticleContainer
