import styled from 'styled-components'

import { mixins } from 'style'

const inputFont = '2.4rem DinMC'
const inputHeight = 4
const inputSpacing = 1
const indicatorSize = inputHeight * 2 + inputSpacing

export const CharacterFieldsWrap = styled.div`
  ${mixins.flex};

  flex-wrap: wrap;
  width: 100%;
`

export const RegionSelect = styled.select`
  height: ${inputHeight}rem;
  width: 10rem;
  margin-right: ${inputSpacing}rem;
  font: ${inputFont};
`

export const RealmSelect = RegionSelect.extend`
  flex-grow: 1;
  margin-right: 0;
`

export const NameInput = styled.input`
  width: 100%;
  height: ${inputHeight}rem;
  margin-top: ${inputSpacing}rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  font: ${inputFont};
  text-transform: capitalize;
`
