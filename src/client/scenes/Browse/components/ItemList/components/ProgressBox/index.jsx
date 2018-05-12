import React from 'react'
import PropTypes from 'prop-types'

import { BrowseBlock } from 'style/components'
import ProgressBar from 'ProgressBar'

import * as SC from 'ProgressBox/styled'

const ProgressBox = ({ count, title, total }) => {
  const fillPercent = count / total * 100
  const fillProp = isNaN(fillPercent) ? 0 : fillPercent

  return (
    <BrowseBlock>
      <SC.TextWrap>
        <SC.ProgressText>{title}</SC.ProgressText>
        <SC.ProgressText>
          {count} / {total}
        </SC.ProgressText>
      </SC.TextWrap>

      <ProgressBar count={fillProp} />
    </BrowseBlock>
  )
}

ProgressBox.propTypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired
}

export default ProgressBox
