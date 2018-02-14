import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

import { CONTENT } from 'constants/content'
import * as SC from './styled'

class NavBar extends Component {
  renderContentNav() {
    if (!this.props.match.params.category) return null

    const { category, content } = this.props.match.params
    const prevPage = Number(content) - 1
    const nextPage = Number(content) + 1

    return (
      <SC.CentreWrap>
        <SC.NavLink
          to={`/browse/${category}/${prevPage}`}
          className="fa fa-arrow-circle-left"
        />

        <SC.MainTitle>{CONTENT[content].content}</SC.MainTitle>

        <SC.NavLink
          to={`/browse/${category}/${nextPage}`}
          className="fa fa-arrow-circle-right"
        />
      </SC.CentreWrap>
    )
  }

  renderCategorySpan() {
    const { category } = this.props.match.params

    return category && <SC.NavSpan>{category}</SC.NavSpan>
  }

  render() {
    return (
      <SC.NavBar>
        <SC.LeftWrap>
          <SC.NavLink className="fa fa-home" to="/" />

          {this.renderCategorySpan()}
        </SC.LeftWrap>

        {this.renderContentNav()}
      </SC.NavBar>
    )
  }
}

NavBar.propTypes = {
  match: PropTypes.object.isRequired
}

export default withRouter(NavBar)
