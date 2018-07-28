import PropTypes from 'prop-types'
import React from 'react'
import { withRouter } from 'react-router-dom'

import * as SC from 'NavBar/styled'

export const NavBar = ({ match }) => {
  const { category } = match.params

  return (
    <SC.NavBar>
      <SC.LeftWrap>
        <SC.NavLink to="/">
          <SC.HomeIcon />
        </SC.NavLink>

        {category && <SC.NavSpan>{category}</SC.NavSpan>}
      </SC.LeftWrap>

      <SC.NavLink to="/import">
        <SC.CharacterPageLink />
      </SC.NavLink>
    </SC.NavBar>
  )
}

NavBar.propTypes = {
  match: PropTypes.object.isRequired
}

export default withRouter(NavBar)
