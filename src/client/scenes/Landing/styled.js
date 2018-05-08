import styled from 'styled-components'

const panelPadding = 1

export const CategoryBlock = styled.ul`
  :not(:last-child) {
    margin-bottom: ${panelPadding * 3}rem;
  }
`
