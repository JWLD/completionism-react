import * as ACTIONS from 'constants/action_types'
import { CATEGORIES } from 'constants/categories'

const categoriesInitialState = CATEGORIES.reduce((acc, category) => {
  return { ...acc, [category.key]: [] }
}, {})

const initialState = {
  categoryData: categoriesInitialState
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_CATEGORY_DATA:
      return {
        ...state,
        categoryData: {
          ...state.categoryData,
          [action.category]: action.data
        }
      }
    default:
      return state
  }
}

export default appReducer
