import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { NPC_RENDER_URLS } from 'constants/urls'
import { itemDataSelector } from 'InfoPanel/selectors'

import * as SC from 'InfoPanel/styled'

const InfoPanel = ({ itemData }) => {
  const imageUrl =
    itemData.displayId && `${NPC_RENDER_URLS.zoom}${itemData.displayId}.jpg`

  return <SC.ItemImage imageUrl={imageUrl} />
}

InfoPanel.propTypes = {
  itemData: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => ({
  itemData: itemDataSelector(state, props)
})

const ReduxComponent = connect(mapStateToProps)(InfoPanel)

export default withRouter(ReduxComponent)
