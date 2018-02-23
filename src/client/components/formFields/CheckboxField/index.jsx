import React from 'react'
import PropTypes from 'prop-types'

const CheckboxField = ({ input, StyledComponent }) => (
  <StyledComponent {...input} type="checkbox" />
)

CheckboxField.propTypes = {
  input: PropTypes.object.isRequired,
  StyledComponent: PropTypes.func.isRequired
}

export default CheckboxField
