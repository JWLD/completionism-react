import styled from 'styled-components'

import { mixins, vars } from 'style'

const itemTilePadding = 0.36
const iconSize = vars.itemHeight - itemTilePadding * 2

export const TileGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(10, 1fr);
  width: 100%;

  :not(:last-child) {
    margin-bottom: 1rem;
  }
`

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
