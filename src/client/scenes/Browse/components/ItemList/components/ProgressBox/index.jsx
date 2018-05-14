import React from 'react'
import PropTypes from 'prop-types'

import { BrowseBlock } from 'style/components'
import ProgressBar from 'ProgressBar'

import * as SC from 'ProgressBox/styled'

const ProgressBox = ({ count, title, total }) => (
  <BrowseBlock>
    <SC.TextWrap>
      <SC.ProgressText>{title}</SC.ProgressText>
      <SC.ProgressText>
        {count} / {total}
      </SC.ProgressText>
    </SC.TextWrap>

    <ProgressBar count={count} total={total} />
  </BrowseBlock>
)

ProgressBox.propTypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired
}

export default ProgressBox
