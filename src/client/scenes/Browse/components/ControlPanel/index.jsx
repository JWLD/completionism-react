import React from 'react'

import * as SC from 'ControlPanel/styled'

const ControlPanel = () => (
  <SC.SettingRow>
    <SC.SettingTitle>View Mode</SC.SettingTitle>
    <SC.ListIcon />
    <SC.SquaresIcon />
  </SC.SettingRow>
)

export default ControlPanel
