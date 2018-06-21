import styled from 'styled-components'

import { vars } from 'style'

export const ProgressBar = styled.div`
  position: relative;
  overflow: hidden;
  height: ${props => props.height};
  min-height: ${props => props.height};
  width: 100%;
  background-color: #444;
  border-radius: 0.3rem;
`

export const BarFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${props => props.fill}%;
  background-color: ${vars.pos};
  border-radius: 0.3rem;
`
