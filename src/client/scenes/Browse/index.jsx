import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchCategoryData } from './actions'
import { categoryParamSelector, categoryDataExistsSelector } from './selectors'

import * as SC from './styled'
import NavBar from 'components/NavBar'
import FilterBox from './components/FilterBox'
import ItemList from './components/ItemList'
import DetailPanel from './components/DetailPanel'

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

const mapStateToProps = (state, ownProps) => ({
  category: categoryParamSelector(state, ownProps),
  categoryDataExists: categoryDataExistsSelector(state, ownProps)
})

const mapDispatchToProps = {
  fetchCategoryData
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)
