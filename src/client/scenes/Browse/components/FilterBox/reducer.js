import * as ACTIONS from 'constants/action_types'

export const initialState = {
  value: ''
}

const filterBoxReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_FILTER_VALUE:
      return { ...state, value: action.value }
    default:
      return state
  }
}

export default filterBoxReducer
