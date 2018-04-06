import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { NPC_RENDER_URLS } from 'constants/urls'
import { itemDataSelector } from 'InfoPanel/selectors'

import * as SC from 'InfoPanel/styled'

const InfoPanel = ({ itemData }) => {
  const imageUrl =
    itemData.displayId && `${NPC_RENDER_URLS.zoom}${itemData.displayId}.jpg`

  return (
    <Fragment>
      <SC.ItemName>{itemData.name || 'Select An Item'}</SC.ItemName>
      <SC.ItemImage imageUrl={imageUrl} />
      <SC.WowheadLink href={`http://www.wowhead.com/item=${itemData.id}`} target="_blank">
        View on Wowhead
      </SC.WowheadLink>
    </Fragment>
  )
}

InfoPanel.propTypes = {
  itemData: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => ({
  itemData: itemDataSelector(state, props)
})

const ReduxComponent = connect(mapStateToProps)(InfoPanel)

export default withRouter(ReduxComponent)
