import styled from 'styled-components'

import { mixins, vars } from 'style'

const minIconSize = vars.itemHeight
const tilePadding = 0.4

export const TileGrid = styled.div`
  display: grid;
  grid-gap: 1.1rem;
  grid-template-columns: repeat(auto-fill, minmax(${minIconSize}rem, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(${minIconSize}rem, 1fr));
  width: 100%;

  :not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const TileWrap = styled.div`
  ${mixins.flexVertical};
`

export const Tile = styled.button`
  ${mixins.flex};

  position: relative;
  width: 100%;
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

export const QualityBar = styled.div`
  width: 100%;
  height: 0.75rem;
  margin-top: ${tilePadding * 2}rem;
  border-radius: 0.2rem;
  background-color: ${props => vars[`q${props.petQuality}`]};
`
