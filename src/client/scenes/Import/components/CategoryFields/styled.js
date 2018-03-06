import styled from 'styled-components'

import { mixins, vars } from 'style'

export const CheckboxWrap = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  padding: 1.2rem 1.6rem;
  border-radius: 0.4rem;
  background-color: #444;

  :not(:last-child) {
    margin-right: 2rem;
  }
`

export const CheckboxLabel = styled.label`
  ${mixins.flexRight};

  flex-direction: row-reverse;
  width: 100%;
  color: white;
  font: 2.5rem DinMC;

  :not(:last-child) {
    margin-bottom: 0.4rem;
  }
`

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
`

export const FakeInput = styled.div`
  ${mixins.flex};

  height: 2.2rem;
  width: 2.2rem;
  margin-right: 1rem;
  border-radius: 0.2rem;
  background-color: #333;
  color: #333;
  font-size: 1.8rem;

  ${CheckboxInput}:checked ~ & {
    background-color: ${vars.pos};
    color: white;
  }
`
