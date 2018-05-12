import styled from 'styled-components'

import { mixins } from 'style'
import { BrowseBlock } from 'style/components'

export const ProgressBarWrap = styled(BrowseBlock)`
  flex-direction: column;
`

export const TextWrap = styled.div`
  ${mixins.flex};

  justify-content: space-between;
  width: 100%;
`

export const ProgressText = styled.span`
  margin: -0.5rem 0;
  font: 3.5rem DinMC;
  color: white;
  text-transform: uppercase;
`
