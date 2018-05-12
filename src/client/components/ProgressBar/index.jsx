import React from 'react'
import PropTypes from 'prop-types'

import * as SC from 'ProgressBar/styled'

const ProgressBar = ({ count, height }) => (
  <SC.ProgressBar height={height}>
    <SC.BarFill fill={count} height={height} />
  </SC.ProgressBar>
)

ProgressBar.propTypes = {
  count: PropTypes.number.isRequired,
  height: PropTypes.number
}

ProgressBar.defaultProps = {
  height: 1.5
}

export default ProgressBar
