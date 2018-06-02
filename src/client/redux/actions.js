import * as ACTIONS from 'constants/action_types'
import { fetchDBCategoryData } from 'services/api'

export const setCategoryData = (category, data) => ({
  type: ACTIONS.SET_CATEGORY_DATA,
  category,
  data
})

// THUNKS

export const fetchCategoryData = category => dispatch => {
  return fetchDBCategoryData(category).then(categoryData => {
    return dispatch(setCategoryData(category, categoryData))
  })
}
