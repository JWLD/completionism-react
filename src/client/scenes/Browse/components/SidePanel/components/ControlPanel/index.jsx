import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { toggleViewMode } from 'ControlPanel/actions'
import { viewModeListSelector } from 'SidePanel/selectors'

import * as SC from 'ControlPanel/styled'

const ControlPanel = ({ listView, toggleViewMode }) => (
  <SC.Setting>
    <SC.SettingTitle>View Mode</SC.SettingTitle>
    <SC.Option onClick={() => toggleViewMode()}>
      List
      <SC.CheckBox active={listView ? 1 : 0} />
    </SC.Option>
    <SC.Option onClick={() => toggleViewMode()}>
      Icons
      <SC.CheckBox active={listView ? 0 : 1} />
    </SC.Option>
  </SC.Setting>
)

ControlPanel.propTypes = {
  listView: PropTypes.bool.isRequired,
  toggleViewMode: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  listView: viewModeListSelector(state)
})

const mapDispatchToProps = {
  toggleViewMode
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel)
