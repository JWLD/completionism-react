import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchCategoryData } from './actions'
import { categoryParamSelector, categoryDataSelector } from './selectors'

import * as SC from './styled'
import NavBar from 'components/NavBar'
import ItemList from './components/ItemList/ItemList'

class Browse extends Component {
  state = {
    filter: ''
  }

  componentDidMount() {
    if (this.props.categoryData.length === 0) {
      this.props.fetchCategoryData(this.props.category)
    }
  }

  onInputChange = e => {
    this.setState({ filter: e.target.value })
  }

  clearSearch = () => {
    this.setState({ filter: '' })
  }

  render() {
    return (
      <SC.BrowsePage>
        <NavBar />

        <SC.FilterWrap>
          <SC.FilterInput
            onChange={this.onInputChange}
            value={this.state.filter}
            placeholder="Filter"
          />
          <SC.ClearInputBtn
            onClick={this.clearSearch}
            className="fa fa-times-circle"
          />
        </SC.FilterWrap>

        <ItemList
          category={this.props.category}
          content={Number(this.props.match.params.content)}
          categoryData={this.props.categoryData}
          filterVal={this.state.filter}
          routeProps={this.props.match.params}
        />
      </SC.BrowsePage>
    )
  }
}

Browse.propTypes = {
  category: PropTypes.string.isRequired,
  categoryData: PropTypes.array.isRequired,
  fetchCategoryData: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  category: categoryParamSelector(state, ownProps),
  categoryData: categoryDataSelector(state, ownProps)
})

const mapDispatchToProps = {
  fetchCategoryData
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)
