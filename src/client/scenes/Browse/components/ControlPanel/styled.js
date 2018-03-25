import styled from 'styled-components'
import { FaAlignJustify, FaTh } from 'react-icons/lib/fa'

import { mixins, vars } from 'style'

export const SettingRow = styled.div`
  ${mixins.flexLeft};

  height: ${vars.itemHeight}rem;
  min-height: ${vars.itemHeight}rem;
  width: 100%;
  border-radius: 0.4rem;
  background-color: ${vars.barGrey};
`

export const SettingTitle = styled.span`
  margin-left: 1.5rem;
  margin-right: auto;
  color: white;
  font: 2.5rem DinMC;
`

const SettingIcon = styled.i`
  height: ${vars.itemHeight}rem;
  width: ${vars.itemHeight}rem;
  padding: 0.75rem;
  padding-top: 0.9rem;
  color: white;

  :hover {
    cursor: pointer;
  }
`

export const ListIcon = SettingIcon.withComponent(FaAlignJustify)

export const SquaresIcon = SettingIcon.withComponent(FaTh)
