import styled from 'styled-components'

import mixins from 'style/mixins'
import vars from 'style/variables'

export const PageWrap = styled.div`
  ${mixins.flexVertical};

  min-width: 100vw;
  margin-top: ${vars.navBarHeight}rem;
  padding: ${vars.pagePadding}rem;
`

export const BrowseBlock = styled.div`
  ${mixins.flexVertical};

  position: relative;
  width: 100%;
  padding: ${vars.itemListPadding}rem;
  border-radius: 0.4rem;
  background-color: ${vars.mainGrey};

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`
