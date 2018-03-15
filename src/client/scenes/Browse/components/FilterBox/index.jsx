import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { resetFilter, setFilter } from 'FilterBox/actions'

import * as SC from 'FilterBox/styled'

export const FilterBox = props => (
  <SC.FilterWrap>
    <SC.FilterInput
      onChange={e => props.setFilter(e.target.value)}
      value={props.filterValue}
      placeholder="Filter"
    />
    <SC.ClearInputBtn
      active={props.filterValue}
      onClick={() => props.resetFilter()}
    />
  </SC.FilterWrap>
)

FilterBox.propTypes = {
  filterValue: PropTypes.string.isRequired,
  resetFilter: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired
}

export const mapStateToProps = state => ({
  filterValue: state.browse.filter
})

const mapDispatchToProps = {
  resetFilter,
  setFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBox)
