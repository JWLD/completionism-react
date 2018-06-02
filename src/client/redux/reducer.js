import * as ACTIONS from 'constants/action_types'
import { CATEGORIES } from 'constants/categories'

const initialState = CATEGORIES.reduce((acc, category) => {
  return { ...acc, [category.key]: [] }
}, {})

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_CATEGORY_DATA:
      return { ...state, [action.category]: action.data }
    default:
      return state
  }
}

export default dataReducer
