import * as ACTIONS from 'constants/action_types'

export const initialState = {
  controlPanelIsActive: false,
  viewModeList: true
}

const sidePanelReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.OPEN_INFO_PANEL:
      return { ...state, controlPanelIsActive: false }
    case ACTIONS.TOGGLE_CONTROL_PANEL:
      return { ...state, controlPanelIsActive: !state.controlPanelIsActive }
    case ACTIONS.TOGGLE_VIEW_MODE:
      return { ...state, viewModeList: !state.viewModeList }
    default:
      return state
  }
}

export default sidePanelReducer
