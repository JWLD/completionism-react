import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { controlPanelIsActiveSelector } from 'Browse/selectors'
import { toggleControlPanel } from 'DetailPanel/actions'

import * as SC from 'DetailPanel/styled'
import ControlPanel from 'ControlPanel'
import InfoPanel from 'InfoPanel'

export const DetailPanel = ({ controlPanelIsActive, toggleControlPanel }) => (
  <SC.DetailPanel>
    <SC.ToggleWrap onClick={() => toggleControlPanel()}>
      <SC.CogIcon active={controlPanelIsActive ? 1 : 0} />
      {controlPanelIsActive ? 'Settings' : 'Info'}
      <SC.InfoIcon active={!controlPanelIsActive ? 1 : 0} />
    </SC.ToggleWrap>

    {controlPanelIsActive ? <ControlPanel /> : <InfoPanel />}
  </SC.DetailPanel>
)

DetailPanel.propTypes = {
  controlPanelIsActive: PropTypes.bool.isRequired,
  toggleControlPanel: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  controlPanelIsActive: controlPanelIsActiveSelector(state)
})

const mapDispatchToProps = {
  toggleControlPanel
}

const ReduxComponent = connect(mapStateToProps, mapDispatchToProps)(DetailPanel)

export default withRouter(ReduxComponent)
