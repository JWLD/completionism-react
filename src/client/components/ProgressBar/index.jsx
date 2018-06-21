import React from 'react'
import PropTypes from 'prop-types'

import * as SC from 'ProgressBar/styled'

const ProgressBar = ({ count, height, total }) => {
  const fillPercent = count / total * 100
  const fillProp = isNaN(fillPercent) ? 0 : fillPercent

  return (
    <SC.ProgressBar height={height}>
      <SC.BarFill fill={fillProp} />
    </SC.ProgressBar>
  )
}

ProgressBar.propTypes = {
  count: PropTypes.number.isRequired,
  height: PropTypes.string,
  total: PropTypes.number.isRequired
}

ProgressBar.defaultProps = {
  height: '1.5rem'
}

export default ProgressBar
