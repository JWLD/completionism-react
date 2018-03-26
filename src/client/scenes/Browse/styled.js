import styled from 'styled-components'

import { mixins, vars } from 'style'
import { PageWrap } from 'style/components'

export const BrowsePage = styled(PageWrap)`
  flex-direction: row;
  align-items: stretch;
  padding: ${vars.browsePadding}rem;
`

export const ListWrap = styled.div`
  ${mixins.flexVertical};

  width: 100%;
  margin-right: calc(50vw - ${vars.browsePadding * 0.5}rem);
`
