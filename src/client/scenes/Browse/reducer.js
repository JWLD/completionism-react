import * as ACTIONS from 'constants/action_types'
import filterReducer from 'FilterBox/reducer'
import sidePanelReducer from 'SidePanel/reducer'

export const initialState = {
  activeCategory: '',
  activeContent: 0,
  activeItemId: 0
}

const browseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.RESET_ACTIVE_ITEM_ID:
      return { ...state, activeItemId: 0 }
    case ACTIONS.SET_ACTIVE_ITEM_ID:
      return { ...state, activeItemId: action.payload }
    case ACTIONS.UPDATE_ACTIVE_CATEGORY:
      return { ...state, activeCategory: action.category }
    case ACTIONS.UPDATE_ACTIVE_CONTENT:
      return { ...state, activeContent: action.content }
    default:
      return {
        ...state,
        filter: filterReducer(state.filter, action),
        sidePanel: sidePanelReducer(state.sidePanel, action)
      }
  }
}

export default browseReducer
