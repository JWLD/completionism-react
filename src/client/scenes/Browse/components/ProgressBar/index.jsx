import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const ProgressBar = props => {
  const fillPercent = props.count / props.total * 100
  const fillProp = isNaN(fillPercent) ? 0 : fillPercent

  return (
    <SC.ProgressBarWrap>
      <SC.TextWrap>
        <SC.ProgressText>{props.title}</SC.ProgressText>
        <SC.ProgressText>
          {props.count} / {props.total}
        </SC.ProgressText>
      </SC.TextWrap>

      <SC.ProgressBar>
        <SC.BarFill fill={fillProp} />
      </SC.ProgressBar>
    </SC.ProgressBarWrap>
  )
}

ProgressBar.propTypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired
}

export default ProgressBar
