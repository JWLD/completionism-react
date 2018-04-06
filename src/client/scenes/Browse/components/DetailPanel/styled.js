import styled from 'styled-components'
import { FaCog, FaInfoCircle } from 'react-icons/lib/fa'

import { mixins, vars } from 'style'

export const DetailPanel = styled.div`
  ${mixins.flexVerticalTop};

  justify-content: flex-start;
  align-items: flex-start;
  position: sticky;
  top: ${vars.navBarHeight + vars.browsePadding}rem;
  right: ${vars.browsePadding}rem;
  width: 50rem;
  height: calc(100vh - ${vars.navBarHeight + vars.browsePadding * 2}rem);
  padding: ${vars.itemListPadding}rem;
  border-radius: 0.4rem;
  background-color: ${vars.mainGrey};

  > * {
    :not(:last-child) {
      margin-bottom: ${vars.itemListPadding}rem;
    }
  }
`

export const TopBar = styled.div`
  ${mixins.flex};

  height: ${vars.itemHeight}rem;
  min-height: ${vars.itemHeight}rem;
  width: 100%;
`

export const Title = styled.span`
  ${mixins.flex};

  flex-grow: 1;
  height: 100%;
  border-radius: 0.4rem;
  background-color: #444;
  color: white;
  font: 3rem DinMC;
  text-transform: uppercase;
`

export const ToggleWrap = styled.button`
  ${mixins.flex};

  position: relative;
  height: ${vars.itemHeight}rem;
  width: ${vars.itemHeight * 2 - vars.itemHeight * 0.15}rem;
  padding: ${vars.itemHeight * 0.15}rem;
  margin-left: ${vars.itemListPadding}rem;
  border-radius: 0.4rem;
  background-color: ${vars.mainDark};
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
