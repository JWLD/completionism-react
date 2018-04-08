import * as ACTIONS from 'constants/action_types'
import CATEGORIES from 'constants/categories'

const categoryState = CATEGORIES.reduce((acc, category) => {
  return { ...acc, [category.key]: [] }
}, {})

const initialState = {
  ...categoryState
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOAD_CATEGORY_DATA:
      return { ...state, [action.category]: action.payload }
    default:
      return state
  }
}

export default appReducer
