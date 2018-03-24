import styled from 'styled-components'
import FaCheckCircle from 'react-icons/lib/fa/check-circle'
import FaTimesCircle from 'react-icons/lib/fa/times-circle'

import { mixins, vars } from 'style'

const itemTilePadding = 0.5
const iconSize = vars.itemHeight - itemTilePadding * 2

export const ItemTile = styled.li`
  ${mixins.browseItem};

  justify-content: space-between;
  height: ${vars.itemHeight}rem;
  padding: ${itemTilePadding}rem;
  background-color: #444;

  :not(:last-child) {
    margin-bottom: 1rem;
  }

  :hover {
    cursor: pointer;
    background-color: #555;
  }
`

export const ItemTitle = styled.span`
  flex-grow: 1;
  color: ${props => vars[`q${props.quality}`]};
  font: 2.25rem DinRC;
  text-align: center;
`

const TileIcon = styled.div`
  height: ${iconSize}rem;
  width: ${iconSize}rem;
  padding: 0.5rem;
  border-radius: 0.4rem;
  background-color: ${vars.mainGrey};
`

export const ItemIcon = styled(TileIcon.withComponent('i')).attrs({
  style: ({ iconUrl }) => ({
    backgroundImage: iconUrl
  })
})`
  background-size: cover;
`

export const CheckIcon = styled(TileIcon.withComponent(FaCheckCircle))`
  color: ${vars.pos};
`

export const CrossIcon = styled(TileIcon.withComponent(FaTimesCircle))`
  color: ${vars.neg};
`

export const PetLevel = styled(TileIcon)`
  ${mixins.flex};

  margin-right: ${itemTilePadding}rem;
  color: ${vars.q7};
  font: 2rem DinM;
`
