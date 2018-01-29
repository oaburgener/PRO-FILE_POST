import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getBySport } from '../actions/actions_index.js'
import Filters from '../components/Filter.js'

const mapDispatchToProps = dispatch => bindActionCreators({
  getBySport
}, dispatch)

const FilterContainer = connect (
  null,
  mapDispatchToProps,
)(Filters)

export default FilterContainer
