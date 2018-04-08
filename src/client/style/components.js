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

export const BrowseItem = styled.div`
  ${mixins.flex};

  width: 100%;
  height: ${vars.itemHeight}rem;
  border-radius: 0.3rem;
`

export const Spinner = styled.div`
  height: ${props => props.size}rem;
  width: ${props => props.size}rem;
  border-width: ${props => props.size * 0.175}rem;
  border-style: solid;
  border-color: ${vars.neg};
  border-top-color: white;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
