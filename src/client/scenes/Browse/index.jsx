import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchCategoryData } from 'Browse/actions'
import {
  categoryParamSelector,
  categoryDataExistsSelector
} from 'Browse/selectors'

import * as SC from 'Browse/styled'
import NavBar from 'NavBar'
import FilterBox from 'FilterBox'
import ItemList from 'ItemList'
import DetailPanel from 'DetailPanel'

export class Browse extends Component {
  componentDidMount() {
    if (!this.props.categoryDataExists) {
      this.props.fetchCategoryData(this.props.category)
    }
  }

  render() {
    return (
      <SC.BrowsePage>
        <NavBar />

        <SC.ListWrap>
          <FilterBox />
          <ItemList />
        </SC.ListWrap>
        <DetailPanel />
      </SC.BrowsePage>
    )
  }
}

Browse.propTypes = {
  category: PropTypes.string.isRequired,
  categoryDataExists: PropTypes.bool.isRequired,
  fetchCategoryData: PropTypes.func.isRequired
}

export const mapStateToProps = (state, ownProps) => ({
  category: categoryParamSelector(state, ownProps),
  categoryDataExists: categoryDataExistsSelector(state, ownProps)
})

const mapDispatchToProps = {
  fetchCategoryData
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)
