import * as ACTIONS from 'constants/action_types'

export const initialState = {
  activeCategory: '',
  activeContent: 0,
  activeItemId: 0,
  controlPanelIsActive: false,
  filter: '',
  viewModeList: true
}

const browseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.OPEN_INFO_PANEL:
      return { ...state, controlPanelIsActive: false }
    case ACTIONS.RESET_ACTIVE_ITEM_ID:
      return { ...state, activeItemId: 0 }
    case ACTIONS.RESET_FILTER:
      return { ...state, filter: '' }
    case ACTIONS.SET_ACTIVE_ITEM_ID:
      return { ...state, activeItemId: action.payload }
    case ACTIONS.SET_FILTER:
      return { ...state, filter: action.value }
    case ACTIONS.TOGGLE_CONTROL_PANEL:
      return { ...state, controlPanelIsActive: !state.controlPanelIsActive }
    case ACTIONS.TOGGLE_VIEW_MODE:
      return { ...state, viewModeList: !state.viewModeList }
    case ACTIONS.UPDATE_ACTIVE_CATEGORY:
      return { ...state, activeCategory: action.category }
    case ACTIONS.UPDATE_ACTIVE_CONTENT:
      return { ...state, activeContent: action.content }
    default:
      return state
  }
}

export default browseReducer
