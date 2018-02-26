import styled from 'styled-components'

import { mixins } from 'style'

export const ListWrap = styled.div`
  width: 100%;
`

export const ItemList = styled.div`
  flex-direction: column;
`

export const ItemListBlock = styled.div`
  ${mixins.browseBlock};

  flex-direction: column;
`

export const BlockTitle = styled.span`
  margin: -0.5rem 0 1.2rem 0;
  font: 3rem DinMC;
  color: white;
  text-transform: uppercase;

  :only-child {
    margin: 0;
  }
`
