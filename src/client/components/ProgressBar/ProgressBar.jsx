import React from 'react'
import PropTypes from 'prop-types'

import { CONTENT } from 'constants/content'
import * as SC from './styled'

const ProgressBar = props => {
  const title = CONTENT[props.routeProps.content].xpac

  const total = props.data.length
  const collected = props.data.filter(item =>
    props.storageData.includes(item.id)
  ).length
  const percentage = collected ? collected / total * 100 : 0
  const progStyle = { width: `${percentage}%` }

  return (
    <SC.ProgressBarWrap>
      <SC.TextWrap>
        <SC.ProgressText>{title}</SC.ProgressText>
        <SC.ProgressText>
          {collected} / {total}
        </SC.ProgressText>
      </SC.TextWrap>

      <SC.ProgressBar>
        <SC.BarFill style={progStyle} />
      </SC.ProgressBar>
    </SC.ProgressBarWrap>
  )
}

ProgressBar.propTypes = {
  data: PropTypes.array.isRequired,
  routeProps: PropTypes.object.isRequired,
  storageData: PropTypes.array.isRequired
}

export default ProgressBar
