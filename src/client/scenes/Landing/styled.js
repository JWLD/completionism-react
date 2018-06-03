import styled from 'styled-components'

import { mixins } from 'style'

const panelPadding = 1

export const SectionTitle = styled.span`
  margin-bottom: 0.5rem;
  color: white;
  font: 3.5rem DinMC;
  text-transform: uppercase;
`

export const SectionWrap = styled.ul`
  ${mixins.flexVerticalLeft};

  :not(:last-child) {
    margin-bottom: ${panelPadding * 3}rem;
  }
`
