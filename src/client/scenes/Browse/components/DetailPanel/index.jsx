import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { controlPanelSelector, itemDataSelector } from 'DetailPanel/selectors'
import { toggleControlPanel } from 'DetailPanel/actions'

import * as SC from 'DetailPanel/styled'
import ControlPanel from 'ControlPanel'
import InfoPanel from 'InfoPanel'

export const DetailPanel = props => {
  const title = props.controlPanelIsActive
    ? 'Control Panel'
    : props.itemData.name || 'Select An Item'

  return (
    <SC.DetailPanel>
      <SC.TopBar>
        <SC.Title>{title}</SC.Title>
        <SC.ToggleWrap onClick={() => props.toggleControlPanel()}>
          <SC.CogIcon active={props.controlPanelIsActive ? 1 : 0} />
          <SC.InfoIcon active={!props.controlPanelIsActive ? 1 : 0} />
        </SC.ToggleWrap>
      </SC.TopBar>

      {props.controlPanelIsActive ? <ControlPanel /> : <InfoPanel />}
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

const ReduxComponent = connect(mapStateToProps, mapDispatchToProps)(DetailPanel)

export default withRouter(ReduxComponent)
