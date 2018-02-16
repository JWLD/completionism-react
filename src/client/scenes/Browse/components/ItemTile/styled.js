import styled from 'styled-components'
import FaCheckCircle from 'react-icons/lib/fa/check-circle'
import FaTimesCircle from 'react-icons/lib/fa/times-circle'

import { mixins, vars } from 'style'

const itemTilePadding = 0.5
const iconSize = vars.sizing.itemHeight - itemTilePadding * 2

export const ItemTile = styled.li`
  ${mixins.itemListItem};

  justify-content: space-between;
  height: ${vars.sizing.itemHeight}rem;
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

export const ItemIcon = styled.i`
  height: ${iconSize}rem;
  width: ${iconSize}rem;
  margin-right: ${itemTilePadding * 2}rem;

  border-radius: 0.4rem;
  background-size: cover;
  background-color: #222;
`

export const ItemTitle = styled.span`
  flex-grow: 1;
  color: ${props => vars.colours[`q${props.quality}`]};
  font: 2.25rem DinRC;
  text-align: center;
`

export const ProgressIconWrap = styled.div`
  height: ${iconSize}rem;
  width: ${iconSize}rem;
  padding: 0.5rem;
  border-radius: 0.4rem;
  background-color: #333;
`

export const CheckIcon = ProgressIconWrap.withComponent(FaCheckCircle).extend`
  color: ${vars.colours.pos};
`

export const CrossIcon = ProgressIconWrap.withComponent(FaTimesCircle).extend`
  color: ${vars.colours.neg};
`
