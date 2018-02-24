import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchCategoryData } from './actions'
import { categoryParamSelector, categoryDataSelector } from './selectors'

import * as SC from './styled'
import NavBar from 'components/NavBar'
import ItemList from './components/ItemList'
import FilterBox from './components/FilterBox'
import ProgressBar from 'components/ProgressBar'

class Browse extends Component {
  componentDidMount() {
    const categoryDataExists = this.props.categoryData.length > 0

    if (!categoryDataExists) {
      this.props.fetchCategoryData(this.props.category)
    }
  }

  render() {
    return (
      <SC.BrowsePage>
        <NavBar />

        <FilterBox />
        <ProgressBar count={3} total={4} />
        <ItemList />
      </SC.BrowsePage>
    )
  }
}

Browse.propTypes = {
  category: PropTypes.string.isRequired,
  categoryData: PropTypes.array.isRequired,
  fetchCategoryData: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  category: categoryParamSelector(state, ownProps),
  categoryData: categoryDataSelector(state, ownProps)
})

const mapDispatchToProps = {
  fetchCategoryData
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)
