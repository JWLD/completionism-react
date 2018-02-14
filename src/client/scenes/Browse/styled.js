import styled from 'styled-components'

import { mixins, vars } from 'style'

export const BrowsePage = styled.div`
  ${mixins.page};
`

export const FilterWrap = styled.div`
  ${mixins.itemListWrap};

  position: relative;
`

export const FilterInput = styled.input`
  ${mixins.itemListItem};

  padding: 1rem;
  background-color: #eee;
  font: 2.5rem DinMC;
`

export const ClearInputBtn = styled.button`
  position: absolute;
  right: 0;
  height: ${vars.sizing.itemHeight}rem;
  width: ${vars.sizing.itemHeight}rem;
  margin-right: ${vars.sizing.itemListPadding}rem;
  color: gray;
  background-color: transparent;
  font-size: 3.25rem;
`
