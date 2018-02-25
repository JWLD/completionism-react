import styled from 'styled-components'
import { FaTimesCircle } from 'react-icons/lib/fa'

import { mixins, vars } from 'style'

export const FilterWrap = styled.div`
  ${mixins.browseBlock};

  position: relative;
`

export const FilterInput = styled.input`
  ${mixins.browseItem};

  padding: 1rem;
  background-color: #eee;
  font: 2.5rem DinMC;
`

export const ClearInputBtn = styled(FaTimesCircle)`
  display: ${props => !props.active && 'none'};
  position: absolute;
  right: 0;
  height: ${vars.sizing.itemHeight}rem;
  width: ${vars.sizing.itemHeight}rem;
  margin-right: ${vars.sizing.itemListPadding}rem;
  padding: 0.75rem;
  color: gray;
  background-color: transparent;
  font-size: 3.25rem;

  :hover {
    cursor: pointer;
  }
`