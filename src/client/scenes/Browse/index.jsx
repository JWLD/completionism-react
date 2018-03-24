import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  changeActiveCategory,
  changeActiveContent,
  fetchCategoryData
} from 'Browse/actions'
import {
  activeContentSelector,
  categoryParamSelector,
  contentParamSelector,
  categoryDataExistsSelector
} from 'Browse/selectors'

import * as SC from 'Browse/styled'
import NavBar from 'NavBar'
import FilterBox from 'FilterBox'
import ItemList from 'ItemList'
import DetailPanel from 'DetailPanel'

export class Browse extends Component {
  componentDidMount() {
    this.props.changeActiveCategory(this.props.category)
    this.props.changeActiveContent(this.props.content)

    if (!this.props.categoryDataExists) {
      this.props.fetchCategoryData(this.props.category)
    }
  }

  componentDidUpdate() {
    if (this.props.activeContent !== this.props.content) {
      this.props.changeActiveContent(this.props.content)
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
  activeContent: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  categoryDataExists: PropTypes.bool.isRequired,
  changeActiveCategory: PropTypes.func.isRequired,
  changeActiveContent: PropTypes.func.isRequired,
  content: PropTypes.number.isRequired,
  fetchCategoryData: PropTypes.func.isRequired
}

export const mapStateToProps = (state, ownProps) => ({
  activeContent: activeContentSelector(state),
  category: categoryParamSelector(state, ownProps),
  categoryDataExists: categoryDataExistsSelector(state, ownProps),
  content: contentParamSelector(state, ownProps)
})

const mapDispatchToProps = {
  changeActiveCategory,
  changeActiveContent,
  fetchCategoryData
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)
