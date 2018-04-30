import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { infoPanelIsActiveSelector } from 'SidePanel/selectors'
import { toggleInfoPanel } from 'SidePanel/actions'

import * as SC from 'SidePanel/styled'
import ControlPanel from 'ControlPanel'
import InfoPanel from 'InfoPanel'

export const SidePanel = ({ infoPanelIsActive, toggleInfoPanel }) => (
  <SC.SidePanel>
    <SC.ToggleWrap onClick={() => toggleInfoPanel()}>
      <SC.CogIcon active={infoPanelIsActive ? 0 : 1} />
      {infoPanelIsActive ? 'Info' : 'Settings'}
      <SC.InfoIcon active={!infoPanelIsActive ? 0 : 1} />
    </SC.ToggleWrap>

    {infoPanelIsActive ? <InfoPanel /> : <ControlPanel />}
  </SC.SidePanel>
)

SidePanel.propTypes = {
  infoPanelIsActive: PropTypes.bool.isRequired,
  toggleInfoPanel: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  infoPanelIsActive: infoPanelIsActiveSelector(state)
})

const mapDispatchToProps = {
  toggleInfoPanel
}

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel)
