import styled from 'styled-components'

import mixins from 'style/mixins'
import vars from 'style/variables'

export const PageWrap = styled.div`
  ${mixins.flexVertical};

  min-width: 100vw;
  margin-top: ${vars.navBarHeight}rem;
  padding: ${vars.pagePadding}rem;
`
