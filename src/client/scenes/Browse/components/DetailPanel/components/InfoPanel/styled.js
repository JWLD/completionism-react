import styled from 'styled-components'

import { mixins, vars } from 'style'

export const InfoPanel = styled.div`
  ${mixins.flexVerticalTop};

  width: 100%;
  height: 100%;
  overflow: scroll;

  > *:not(:last-child) {
    margin-bottom: ${vars.itemListPadding}rem;
  }
`

export const ItemName = styled.span`
  ${mixins.flex};

  height: ${vars.itemHeight}rem;
  width: 100%;
  border-radius: 0.4rem;
  background-color: #444;
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

export const WowheadLink = ItemName.withComponent('a')
