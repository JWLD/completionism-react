import styled from 'styled-components'
import FaRocket from 'react-icons/lib/fa/rocket'

import { mixins, vars } from 'style'

export const InfoPanel = styled.div`
  ${mixins.flexVerticalTop};

  width: 100%;
  flex-grow: 1;
  overflow: scroll;

  > *:not(:last-child) {
    margin-bottom: ${vars.itemListPadding}rem;
  }
`

export const ItemName = styled.span`
  ${mixins.flex};

  width: 100%;
  color: white;
  font: 2.5rem DinRC;
  white-space: nowrap;
`

export const ItemImage = styled.div.attrs({
  style: ({ imageUrl }) => ({
    backgroundImage: `url(${imageUrl})`
  })
})`
  width: 100%;
  padding-bottom: 100%;
  border-radius: 0.4rem;
  background-color: #444;
  background-size: cover;
  background-position: center;
`

export const WowheadLink = styled.a`
  ${mixins.flexLeft};

  justify-content: space-between;
  width: 100%;
  height: ${vars.itemHeight}rem;
  padding: 1.2rem;
  border-radius: 0.4rem;
  background-color: #444;
  color: white;
  font: 2.5rem DinRC;

  :hover {
    background-color: #555;
  }
`

export const WowheadIcon = styled(FaRocket)`
  height: 100%;
`
