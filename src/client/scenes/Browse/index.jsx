import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { changeActiveCategory, setActiveContent } from 'Browse/actions'
import { categoryParamSelector, contentParamSelector } from 'Browse/selectors'
import { changeBrowsePage } from 'Browse/actions'

import * as SC from 'Browse/styled'
import NavBar from 'NavBar'
import FilterBox from 'FilterBox'
import ItemList from 'ItemList'
import SidePanel from 'SidePanel'

export class Browse extends Component {
  componentWillMount() {
    this.props.changeActiveCategory(this.props.category)
    this.props.setActiveContent(this.props.content)

    document.addEventListener('keydown', this.handleKeyDown)
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
        <SidePanel />
      </SC.BrowsePage>
    )
  }
}

Browse.propTypes = {
  category: PropTypes.string.isRequired,
  changeActiveCategory: PropTypes.func.isRequired,
  changeBrowsePage: PropTypes.func.isRequired,
  content: PropTypes.number.isRequired,
  setActiveContent: PropTypes.func.isRequired
}

export const mapStateToProps = (state, ownProps) => ({
  category: categoryParamSelector(state, ownProps),
  content: contentParamSelector(state, ownProps)
})

const mapDispatchToProps = {
  changeActiveCategory,
  changeBrowsePage,
  setActiveContent
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)
