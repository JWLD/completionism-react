import * as ACTIONS from 'constants/action_types'
import { fetchDBCategoryData } from 'services/api'

export const changeActiveCategory = category => ({
  type: ACTIONS.UPDATE_ACTIVE_CATEGORY,
  category
})

export const loadCategoryData = (categoryData, category) => ({
  type: ACTIONS.LOAD_CATEGORY_DATA,
  payload: categoryData,
  category
})

// THUNKS

export const fetchCategoryData = category => dispatch => {
  return fetchDBCategoryData(category).then(categoryData => {
    return dispatch(loadCategoryData(categoryData, category))
  })
}
