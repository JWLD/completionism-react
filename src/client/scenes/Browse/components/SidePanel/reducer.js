import * as ACTIONS from 'constants/action_types'
import { VIEW_MODES } from 'ControlPanel/constants'

export const initialState = {
  infoPanelIsActive: true,
  viewMode: VIEW_MODES.LIST
}

const sidePanelReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.OPEN_INFO_PANEL:
      return { ...state, infoPanelIsActive: true }
    case ACTIONS.TOGGLE_INFO_PANEL:
      return { ...state, infoPanelIsActive: !state.infoPanelIsActive }
    case ACTIONS.SET_VIEW_MODE:
      return { ...state, viewMode: action.mode }
    default:
      return state
  }
}

export default sidePanelReducer
