import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { toggleViewMode } from 'ControlPanel/actions'
import { viewModeListSelector } from 'ControlPanel/selectors'

import * as SC from 'ControlPanel/styled'

const ControlPanel = ({ listView, toggleViewMode }) => (
  <SC.SettingRow>
    <SC.SettingTitle>View Mode</SC.SettingTitle>
    <SC.ListIcon active={listView ? 1 : 0} onClick={() => toggleViewMode()} />
    <SC.SquaresIcon
      active={listView ? 0 : 1}
      onClick={() => toggleViewMode()}
    />
  </SC.SettingRow>
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
