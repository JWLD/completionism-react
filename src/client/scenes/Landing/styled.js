import styled from 'styled-components'

import { mixins } from 'style'

export const SectionWrap = styled.div`
  ${mixins.flexVerticalLeft};

  width: 100%;
  max-width: 120rem;

  :not(:last-child) {
    margin-bottom: 3rem;
  }
`

export const SectionTitle = styled.span`
  margin-bottom: 0.5rem;
  color: white;
  font: 3.5rem DinMC;
  text-transform: uppercase;
`

export const CategoriesWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  grid-gap: 1rem;
  width: 100%;
`
