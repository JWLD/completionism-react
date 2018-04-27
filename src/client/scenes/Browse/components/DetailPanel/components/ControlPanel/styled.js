import styled from 'styled-components'
import FaCheck from 'react-icons/lib/fa/check'

import { mixins, vars } from 'style'

const settingPadding = vars.itemListPadding * 0.75
const checkBoxHeight = 2.2

export const Setting = styled.div`
  ${mixins.flexVertical};

  width: 100%;
  padding: ${settingPadding}rem;
  border-radius: 0.4rem;
  background-color: #444;
  color: white;
`

export const SettingTitle = styled.span`
  margin: -0.3rem 0 ${settingPadding * 0.5}rem 0;
  font: 2.25rem DinMC;
  text-transform: uppercase;
`

export const Option = styled.button`
  ${mixins.flex};

  justify-content: space-between;
  width: 100%;
  background-color: transparent;
  color: white;
  font: 2.2rem DinRC;
  line-height: 0;

  :not(:last-child) {
    margin-bottom: ${settingPadding * 0.75}rem;
  }
`

export const CheckBox = styled(FaCheck)`
  height: ${checkBoxHeight}rem;
  width: ${checkBoxHeight}rem;
  padding: 0.2rem;
  border-radius: 0.2rem;
  background-color: ${props => (props.active ? vars.pos : vars.mainGrey)};
  color: ${props => (props.active ? 'white' : vars.mainGrey)};
`
