import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FaTimesCircle from 'react-icons/lib/fa/times-circle'

import { fetchCategoryData } from './actions'

import * as SC from './styled'
import NavBar from 'components/NavBar'
import ItemList from './components/ItemList/ItemList'

class Browse extends Component {
  constructor(props) {
    super(props)

    this.state = {
      category: this.props.match.params.category,
      filter: ''
    }

    this.onInputChange = this.onInputChange.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
  }

  componentDidMount() {
    if (!this.props[this.state.category]) {
      this.props.fetchCategoryData(this.state.category)
    }
  }

  onInputChange(e) {
    this.setState({ filter: e.target.value })
  }

  clearSearch() {
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
          category={this.state.category}
          content={Number(this.props.match.params.content)}
          categoryData={this.props[this.state.category] || []}
          filterVal={this.state.filter}
          routeProps={this.props.match.params}
        />
      </SC.BrowsePage>
    )
  }
}

Browse.propTypes = {
  fetchCategoryData: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  [ownProps.match.params.category]: state.browse[ownProps.match.params.category]
})

const mapDispatchToProps = {
  fetchCategoryData
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)
