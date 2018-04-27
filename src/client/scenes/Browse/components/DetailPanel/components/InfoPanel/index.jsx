import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { NPC_RENDER_URLS } from 'constants/urls'
import { activeItemIdSelector } from 'Browse/selectors'
import { itemDataSelector } from 'InfoPanel/selectors'

import * as SC from 'InfoPanel/styled'

const InfoPanel = ({ activeItemId, itemData }) => {
  const imageUrl =
    itemData.displayId && `${NPC_RENDER_URLS.zoom}${itemData.displayId}.jpg`

  const placeholder = <SC.Placeholder>Please select an item</SC.Placeholder>

  const panelComponents = (
    <Fragment>
      <SC.ItemName>{itemData.name || 'Select An Item'}</SC.ItemName>
      <SC.ItemImage imageUrl={imageUrl} />
      <SC.WowheadLink
        href={`http://www.wowhead.com/spell=${itemData.id}`}
        target="_blank">
        Wowhead
        <SC.WowheadIcon />
      </SC.WowheadLink>
    </Fragment>
  )

  return <SC.InfoPanel>{activeItemId ? panelComponents : placeholder}</SC.InfoPanel>
}

InfoPanel.propTypes = {
  activeItemId: PropTypes.number.isRequired,
  itemData: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => ({
  activeItemId: activeItemIdSelector(state),
  itemData: itemDataSelector(state, props)
})

const ReduxComponent = connect(mapStateToProps)(InfoPanel)

export default withRouter(ReduxComponent)
