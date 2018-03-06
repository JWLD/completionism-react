import styled from 'styled-components'

import { mixins, vars } from 'style'

export const DetailPanel = styled.div`
  ${mixins.flex};

  justify-content: flex-start;
  align-items: flex-start;
  position: fixed;
  top: ${vars.navBarHeight + vars.browsePadding}rem;
  right: ${vars.browsePadding}rem;
  width: calc(50vw - ${vars.browsePadding * 1.5}rem);
  height: calc(100vh - ${vars.navBarHeight + vars.browsePadding * 2}rem);
  padding: ${vars.itemListPadding}rem;
  border-radius: 0.4rem;
  background-color: ${vars.mainGrey};
`

export const ItemImage = styled.div.attrs({
  style: ({ imageUrl }) => ({
    backgroundImage: `url(${imageUrl})`
  })
})`
  width: 30rem;
  height: 30rem;
  border-radius: 0.4rem;
  background-color: #444;
  background-size: cover;
  background-position: center;
`
