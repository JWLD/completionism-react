import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { controlPanelSelector, itemDataSelector } from 'DetailPanel/selectors'
import { NPC_RENDER_URLS } from 'constants/urls'
import { toggleControlPanel } from 'DetailPanel/actions'

import * as SC from 'DetailPanel/styled'

export const DetailPanel = props => {
  const imageUrl = props.itemData.displayId
    ? `${NPC_RENDER_URLS.zoom}${props.itemData.displayId}.jpg`
    : null

  const title = props.controlPanelIsActive
    ? 'Control Panel'
    : props.itemData.name || 'Select An Item'

  const content = props.controlPanelIsActive ? null : (
    <SC.ItemImage imageUrl={imageUrl} />
  )

  return (
    <SC.DetailPanel>
      <SC.TopBar>
        <SC.Title>{title}</SC.Title>
        <SC.ToggleWrap onClick={() => props.toggleControlPanel()}>
          <SC.CogIcon active={props.controlPanelIsActive} />
          <SC.InfoIcon active={!props.controlPanelIsActive} />
        </SC.ToggleWrap>
      </SC.TopBar>
      {content}
    </SC.DetailPanel>
  )
}

DetailPanel.propTypes = {
  controlPanelIsActive: PropTypes.bool.isRequired,
  itemData: PropTypes.object.isRequired,
  toggleControlPanel: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => ({
  controlPanelIsActive: controlPanelSelector(state),
  itemData: itemDataSelector(state, props)
})

const mapDispatchToProps = {
  toggleControlPanel
}

const reduxComponent = connect(mapStateToProps, mapDispatchToProps)(DetailPanel)

export default withRouter(reduxComponent)
