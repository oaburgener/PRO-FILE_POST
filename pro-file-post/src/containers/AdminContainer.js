import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUsers } from '../actions/actions_index.js'
import { getArticles } from '../actions/actions_index.js'
import Admin from '../components/Admin.js'

const mapStateToProps = state => ({
  all_users:state.admin.all_users,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUsers: getUsers,
}, dispatch)

const AdminContainer = connect (
  mapStateToProps,mapDispatchToProps
)(Admin)

export default AdminContainer
