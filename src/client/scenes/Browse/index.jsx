import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchCategoryData } from './actions'
import { categoryParamSelector, categoryDataSelector } from './selectors'

import * as SC from './styled'
import NavBar from 'components/NavBar'
// import ItemList from './components/ItemList/ItemList'
import FilterBox from './components/FilterBox'

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

        {/* <ItemList
          category={this.props.category}
          content={Number(this.props.match.params.content)}
          categoryData={this.props.categoryData}
          filterVal={this.state.filter}
          routeProps={this.props.match.params}
        /> */}
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
