import styled from 'styled-components'

import { mixins, vars } from 'style'

const barHeight = 1.5

export const ProgressBarWrap = styled.div`
  ${mixins.itemListWrap};

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

export const ProgressBar = styled.div`
  position: relative;
  overflow: hidden;
  height: ${barHeight}rem;
  width: 100%;
  margin-top: ${vars.sizing.itemListPadding}rem;
  background-color: #444;
  border-radius: 0.3rem;
`

export const BarFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: ${barHeight}rem;
  width: 4rem;
  background-color: ${vars.colours.pos};
  border-radius: 0.3rem;
`