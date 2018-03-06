import styled from 'styled-components'

import { mixins, vars } from 'style'

export const BrowsePage = styled.div`
  ${mixins.pageWrap};

  flex-direction: row;
  align-items: stretch;
  padding: ${vars.browsePadding}rem;
`

export const ListWrap = styled.div`
  ${mixins.flexVertical};

  width: 100%;
  margin-right: calc(50vw - ${vars.browsePadding * 0.5}rem);
`
