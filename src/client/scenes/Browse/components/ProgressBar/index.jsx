import React from 'react'
import PropTypes from 'prop-types'

import * as SC from 'ProgressBar/styled'
import { BrowseBlock } from 'style/components'

const ProgressBar = props => {
  const fillPercent = props.count / props.total * 100
  const fillProp = isNaN(fillPercent) ? 0 : fillPercent

  return (
    <BrowseBlock>
      <SC.TextWrap>
        <SC.ProgressText>{props.title}</SC.ProgressText>
        <SC.ProgressText>
          {props.count} / {props.total}
        </SC.ProgressText>
      </SC.TextWrap>

      <SC.ProgressBar>
        <SC.BarFill fill={fillProp} />
      </SC.ProgressBar>
    </BrowseBlock>
  )
}

ProgressBar.propTypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired
}

export default ProgressBar
