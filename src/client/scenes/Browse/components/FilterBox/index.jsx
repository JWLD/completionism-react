import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { resetFilter, setFilter } from 'FilterBox/actions'
import { filterValueSelector } from 'FilterBox/selectors'

import * as SC from 'FilterBox/styled'
import { BrowseBlock } from 'style/components'

export const FilterBox = props => (
  <BrowseBlock>
    <SC.FilterInput
      onChange={e => props.setFilter(e.target.value)}
      value={props.filterValue}
      placeholder="Filter"
    />
    <SC.ClearInputBtn active={props.filterValue} onClick={() => props.resetFilter()} />
  </BrowseBlock>
)

FilterBox.propTypes = {
  filterValue: PropTypes.string.isRequired,
  resetFilter: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired
}

export const mapStateToProps = state => ({
  filterValue: filterValueSelector(state)
})

const mapDispatchToProps = {
  resetFilter,
  setFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBox)
