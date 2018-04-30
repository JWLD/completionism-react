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
    case ACTIONS.SET_ACTIVE_CATEGORY:
      return { ...state, activeCategory: action.category }
    case ACTIONS.SET_ACTIVE_CONTENT:
      return { ...state, activeContent: action.content }
    case ACTIONS.SET_ACTIVE_ITEM_ID:
      return { ...state, activeItemId: action.itemId }
    default:
      return {
        ...state,
        filterBox: filterReducer(state.filterBox, action),
        sidePanel: sidePanelReducer(state.sidePanel, action)
      }
  }
}

export default browseReducer
