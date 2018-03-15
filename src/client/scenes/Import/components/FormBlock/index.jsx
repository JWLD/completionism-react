import React from 'react'
import PropTypes from 'prop-types'
import { FormSection } from 'redux-form'

import * as SC from 'FormBlock/styled'

const FormBlock = props => (
  <SC.FormSection>
    <SC.FormHeader>{props.header}</SC.FormHeader>

    <SC.InputWrap>
      <FormSection name={props.name}>{props.fieldsComponent}</FormSection>
    </SC.InputWrap>
  </SC.FormSection>
)

FormBlock.propTypes = {
  fieldsComponent: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default FormBlock
