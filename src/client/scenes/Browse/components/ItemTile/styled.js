import styled from 'styled-components'

import { mixins, vars } from 'style'

const itemTilePadding = 0.36
const iconSize = vars.itemHeight - itemTilePadding * 2

export const Tile = styled.div`
  ${mixins.flex};

  height: ${vars.itemHeight}rem;
  width: ${vars.itemHeight}rem;
  border-radius: 0.4rem;
  background-color: ${props => (props.collected ? vars.pos : vars.neg)};
`

export const TileIcon = styled('i').attrs({
  style: ({ iconUrl }) => ({
    backgroundImage: iconUrl
  })
})`
  height: ${iconSize}rem;
  width: ${iconSize}rem;
  padding: 0.5rem;
  border-radius: 0.4rem;
  background-color: ${vars.mainGrey};
  background-size: cover;
`
