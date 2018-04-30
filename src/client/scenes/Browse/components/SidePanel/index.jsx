import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { controlPanelIsActiveSelector } from 'SidePanel/selectors'
import { toggleControlPanel } from 'SidePanel/actions'

import * as SC from 'SidePanel/styled'
import ControlPanel from 'ControlPanel'
import InfoPanel from 'InfoPanel'

export const SidePanel = ({ controlPanelIsActive, toggleControlPanel }) => (
  <SC.SidePanel>
    <SC.ToggleWrap onClick={() => toggleControlPanel()}>
      <SC.CogIcon active={controlPanelIsActive ? 1 : 0} />
      {controlPanelIsActive ? 'Settings' : 'Info'}
      <SC.InfoIcon active={!controlPanelIsActive ? 1 : 0} />
    </SC.ToggleWrap>

    {controlPanelIsActive ? <ControlPanel /> : <InfoPanel />}
  </SC.SidePanel>
)

SidePanel.propTypes = {
  controlPanelIsActive: PropTypes.bool.isRequired,
  toggleControlPanel: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  controlPanelIsActive: controlPanelIsActiveSelector(state)
})

const mapDispatchToProps = {
  toggleControlPanel
}

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel)
