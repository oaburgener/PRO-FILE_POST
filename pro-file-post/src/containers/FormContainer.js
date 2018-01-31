import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createArticle } from '../actions/actions_index.js'
import Form from '../components/Form.js'

const mapStateToProps = state => ({
  cookie: state.login.cookie,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  createArticle
}, dispatch)

const FormContainer = connect (
  mapStateToProps,
  mapDispatchToProps,
)(Form)

export default FormContainer
