import * as ACTIONS from 'constants/action_types'

export const initialState = {
  activeItemId: 0,
  filter: ''
}

const browseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_CATEGORY_DATA:
      return { ...state, [action.category]: action.payload }
    case ACTIONS.RESET_FILTER:
      return { ...state, filter: '' }
    case ACTIONS.SET_ACTIVE_ITEM:
      return { ...state, activeItemId: action.payload }
    case ACTIONS.SET_FILTER:
      return { ...state, filter: action.payload }
    default:
      return state
  }
}

export default browseReducer
