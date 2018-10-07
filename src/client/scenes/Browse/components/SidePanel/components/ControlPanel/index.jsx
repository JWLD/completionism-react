import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setViewMode } from 'ControlPanel/actions'
import { viewModeSelector } from 'SidePanel/selectors'

import * as SC from 'ControlPanel/styled'
import { VIEW_MODES } from 'ControlPanel/constants'

const ControlPanel = ({ setViewMode, viewMode }) => (
  <SC.Setting>
    <SC.SettingTitle>View Mode</SC.SettingTitle>

    <SC.Option onClick={() => setViewMode(VIEW_MODES.LIST)}>
      List
      <SC.CheckBox active={viewMode === VIEW_MODES.LIST ? 1 : 0} />
    </SC.Option>

    <SC.Option onClick={() => setViewMode(VIEW_MODES.ICONS)}>
      Icons
      <SC.CheckBox active={viewMode === VIEW_MODES.ICONS ? 1 : 0} />
    </SC.Option>

    {/* <SC.Option onClick={() => setViewMode(VIEW_MODES.TILES)}>
      Tiles
      <SC.CheckBox active={viewMode === VIEW_MODES.TILES ? 1 : 0} />
    </SC.Option> */}
  </SC.Setting>
)

ControlPanel.propTypes = {
  setViewMode: PropTypes.func.isRequired,
  viewMode: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  viewMode: viewModeSelector(state)
})

const mapDispatchToProps = {
  setViewMode
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel)
