import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { itemDataSelector } from 'scenes/Browse/components/DetailPanel/selectors'
import { NPC_RENDER_URLS } from 'constants/urls'

import * as SC from './styled'

export const DetailPanel = props => {
  const imageUrl = props.itemData.displayId
    ? `${NPC_RENDER_URLS.zoom}${props.itemData.displayId}.jpg`
    : null

  return (
    <SC.DetailPanel>
      <SC.ItemImage imageUrl={imageUrl} />
    </SC.DetailPanel>
  )
}

DetailPanel.propTypes = {
  itemData: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => ({
  itemData: itemDataSelector(state, props)
})

const reduxComponent = connect(mapStateToProps)(DetailPanel)

export default withRouter(reduxComponent)
