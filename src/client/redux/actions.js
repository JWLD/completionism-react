import * as ACTIONS from 'constants/action_types'
import { fetchDBCategoryData } from 'services/api'

export const loadCategoryData = (category, data) => ({
  type: ACTIONS.LOAD_CATEGORY_DATA,
  category,
  data
})

// thunks

export const fetchCategoryData = category => dispatch => {
  return fetchDBCategoryData(category).then(categoryData => {
    return dispatch(loadCategoryData(category, categoryData))
  })
}
