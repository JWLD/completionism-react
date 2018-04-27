import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { changeActiveCategory, changeActiveContent } from 'Browse/actions'
import {
  activeContentSelector,
  categoryParamSelector,
  contentParamSelector
} from 'Browse/selectors'
import { changeBrowsePage } from 'Browse/actions'

import * as SC from 'Browse/styled'
import NavBar from 'NavBar'
import FilterBox from 'FilterBox'
import ItemList from 'ItemList'
import DetailPanel from 'DetailPanel'

export class Browse extends Component {
  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentDidMount() {
    this.props.changeActiveCategory(this.props.category)
    this.props.changeActiveContent(this.props.content)
  }

  componentDidUpdate() {
    if (this.props.activeContent !== this.props.content) {
      this.props.changeActiveContent(this.props.content)
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = ({ key }) => {
    if (key === 'ArrowLeft') {
      this.props.changeBrowsePage({ next: false })
    } else if (key === 'ArrowRight') {
      this.props.changeBrowsePage({ next: true })
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
  changeActiveCategory: PropTypes.func.isRequired,
  changeActiveContent: PropTypes.func.isRequired,
  changeBrowsePage: PropTypes.func.isRequired,
  content: PropTypes.number.isRequired
}

export const mapStateToProps = (state, ownProps) => ({
  activeContent: activeContentSelector(state),
  category: categoryParamSelector(state, ownProps),
  content: contentParamSelector(state, ownProps)
})

const mapDispatchToProps = {
  changeActiveCategory,
  changeActiveContent,
  changeBrowsePage
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)
