import * as ACTIONS from 'constants/action_types'

export const initialState = {
  infoPanelIsActive: true,
  viewModeList: true
}

const sidePanelReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.OPEN_INFO_PANEL:
      return { ...state, infoPanelIsActive: true }
    case ACTIONS.TOGGLE_INFO_PANEL:
      return { ...state, infoPanelIsActive: !state.infoPanelIsActive }
    case ACTIONS.TOGGLE_VIEW_MODE:
      return { ...state, viewModeList: !state.viewModeList }
    default:
      return state
  }
}

export default sidePanelReducer
