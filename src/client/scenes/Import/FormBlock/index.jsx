import React from 'react'
import { FormSection } from 'redux-form'

import * as SC from './styled'

const FormBlock = props => (
  <SC.FormSection>
    <SC.FormHeader>{props.header}</SC.FormHeader>

    <SC.InputWrap>
      <FormSection name={props.name}>{props.fieldsComponent}</FormSection>
    </SC.InputWrap>
  </SC.FormSection>
)

export default FormBlock
