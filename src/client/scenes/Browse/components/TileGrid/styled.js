import styled from 'styled-components'

import { mixins, vars } from 'style'

const minIconSize = 5.5
const tilePadding = 0.4

export const TileGrid = styled.div`
  display: grid;
  grid-gap: 1.25rem;
  grid-template-columns: repeat(auto-fill, minmax(${minIconSize}rem, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(${minIconSize}rem, 1fr));
  width: 100%;

  :not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const Tile = styled.div`
  ${mixins.flex};

  position: relative;
  padding-top: 100%;
  border-radius: 0.4rem;
  background-color: ${props => (props.collected ? vars.pos : vars.neg)};
`

export const TileIcon = styled('i').attrs({
  style: ({ iconUrl }) => ({
    backgroundImage: iconUrl
  })
})`
  position: absolute;
  top: ${tilePadding}rem;
  left: ${tilePadding}rem;
  right: ${tilePadding}rem;
  bottom: ${tilePadding}rem;
  border-radius: 0.4rem;
  background-color: ${vars.mainGrey};
  background-size: cover;
`
