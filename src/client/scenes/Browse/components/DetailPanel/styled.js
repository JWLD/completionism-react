import styled from 'styled-components'
import FaInfoCircle from 'react-icons/lib/fa/info-circle'
import FaCog from 'react-icons/lib/fa/cog'

import { mixins, vars } from 'style'

export const DetailPanel = styled.div`
  ${mixins.flexVerticalTop};

  justify-content: flex-start;
  align-items: flex-start;
  position: sticky;
  top: ${vars.navBarHeight}rem;
  right: 0;
  height: calc(100vh - ${vars.navBarHeight}rem);
  width: 32.5rem;
  min-width: 32.5rem;
  padding: ${vars.itemListPadding}rem;
  border-radius: 0.4rem;
  background-color: ${vars.mainGrey};
`

export const ToggleWrap = styled.button`
  ${mixins.flex};

  position: relative;
  height: ${vars.itemHeight}rem;
  width: 100%;
  margin-bottom: ${vars.itemListPadding}rem;
  padding: ${vars.itemHeight * 0.15}rem;
  border-radius: 0.4rem;
  background-color: ${vars.mainDark};
  color: white;
  font: 3rem DinMC;
  text-transform: uppercase;
  overflow: hidden;
`

export const CogIcon = styled(FaCog)`
  position: absolute;
  right: 0;
  top: 0;
  height: ${vars.itemHeight}rem;
  width: ${vars.itemHeight}rem;
  padding: 0.75rem;
  color: ${props => (props.active ? 'white' : 'gray')};
`

export const InfoIcon = CogIcon.withComponent(FaInfoCircle).extend`
  right: auto;
  left: 0;
`
