import styled from 'styled-components'

import { mixins } from 'style'

export const FormSection = styled.section`
  :not(:last-child) {
    margin-bottom: 3rem;
  }
`

export const FormHeader = styled.h2`
  margin-bottom: 1rem;
  color: white;
  font: 4rem DinRC;
`

export const InputWrap = styled.div`
  ${mixins.flex};

  align-items: stretch;
  width: 70rem;
  padding: 2rem;
  border-radius: 0.4rem;
  background-color: #333;
`
