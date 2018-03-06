import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  FaHome,
  FaArrowCircleLeft,
  FaArrowCircleRight
} from 'react-icons/lib/fa'

import { mixins, vars } from 'style'

const navBarPadding = 1.25
const linkSize = vars.navBarHeight - navBarPadding * 2
const iconSize = 3.5

export const NavBar = styled.nav`
  ${mixins.flex};

  z-index: ${vars.navBar};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${vars.navBarHeight}rem;
  background-color: ${vars.mainLight};
  box-shadow: 0 0 1.5rem 0.1rem black;
`

export const LeftWrap = styled.div`
  ${mixins.flex};

  position: absolute;
  top: 0;
  left: 0;
  padding: ${navBarPadding}rem;
`

export const CentreWrap = styled.div`
  ${mixins.flex};

  width: 45rem;
  justify-content: space-between;
`

export const MainTitle = styled.h1`
  color: white;
  font: 5rem DinMC;
  text-transform: uppercase;
`

export const NavLink = styled(Link)`
  ${mixins.flex};

  height: ${linkSize}rem;
  min-width: ${linkSize}rem;
  padding: 0.75rem;
  border-radius: 0.4rem;
  color: white;
  background-color: ${vars.mainDark};
  font-size: 3.25rem;

  :not(:last-child) {
    margin-right: ${navBarPadding}rem;
  }
`

export const NavSpan = NavLink.withComponent('span').extend`
  padding: 0.75rem 1rem;
  font: 2.5rem DinMC;
  text-transform: uppercase;
`

export const HomeIcon = styled(FaHome)`
  height: ${iconSize}rem;
  width: ${iconSize}rem;
`

export const CircleLeftIcon = HomeIcon.withComponent(FaArrowCircleLeft)

export const CircleRightIcon = HomeIcon.withComponent(FaArrowCircleRight)
