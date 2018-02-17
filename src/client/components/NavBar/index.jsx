import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

import { CONTENT } from 'constants/content'
import * as SC from './styled'

export const NavBar = props => {
  const renderCentreNav = () => {
    if (!props.match.params.category) return null

    const { category, content } = props.match.params
    const prevPage = Number(content) - 1
    const nextPage = Number(content) + 1

    return (
      <SC.CentreWrap>
        <SC.NavLink to={`/browse/${category}/${prevPage}`}>
          <SC.CircleLeftIcon />
        </SC.NavLink>

        <SC.MainTitle>{CONTENT[content].content}</SC.MainTitle>

        <SC.NavLink to={`/browse/${category}/${nextPage}`}>
          <SC.CircleRightIcon />
        </SC.NavLink>
      </SC.CentreWrap>
    )
  }

  const renderCategorySpan = () => {
    const { category } = props.match.params

    return category && <SC.NavSpan>{category}</SC.NavSpan>
  }

  return (
    <SC.NavBar>
      <SC.LeftWrap>
        <SC.NavLink to="/">
          <SC.HomeIcon />
        </SC.NavLink>

        {renderCategorySpan()}
      </SC.LeftWrap>

      {renderCentreNav()}
    </SC.NavBar>
  )
}

NavBar.propTypes = {
  match: PropTypes.object.isRequired
}

export default withRouter(NavBar)
