import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import * as SC from 'NavBar/styled'

import { CONTENT } from 'constants/content'
import { changeBrowsePage } from 'Browse/actions'

export const NavBar = ({ changeBrowsePage, match }) => {
  const renderCentreNav = () => {
    if (!match.params.category) return null

    const { content } = match.params

    return (
      <SC.CentreWrap>
        <SC.NavButton onClick={() => changeBrowsePage({ next: false })}>
          <SC.CircleLeftIcon />
        </SC.NavButton>

        <SC.MainTitle>{CONTENT[content].content}</SC.MainTitle>

        <SC.NavButton onClick={() => changeBrowsePage({ next: true })}>
          <SC.CircleRightIcon />
        </SC.NavButton>
      </SC.CentreWrap>
    )
  }

  const renderCategorySpan = () => {
    const { category } = match.params

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
  changeBrowsePage: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
}

const mapDispatchToProps = {
  changeBrowsePage
}

const ReduxComponent = connect(null, mapDispatchToProps)(NavBar)

export default withRouter(ReduxComponent)
