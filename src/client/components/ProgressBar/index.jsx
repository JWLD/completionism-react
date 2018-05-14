import React from 'react'
import PropTypes from 'prop-types'

import * as SC from 'ProgressBar/styled'

const ProgressBar = ({ count, height, total }) => {
  const fillPercent = count / total * 100
  const fillProp = isNaN(fillPercent) ? 0 : fillPercent

  return (
    <SC.ProgressBar height={height}>
      <SC.BarFill fill={fillProp} height={height} />
    </SC.ProgressBar>
  )
}

ProgressBar.propTypes = {
  count: PropTypes.number.isRequired,
  height: PropTypes.number,
  total: PropTypes.number.isRequired
}

ProgressBar.defaultProps = {
  height: 1.5
}

export default ProgressBar
