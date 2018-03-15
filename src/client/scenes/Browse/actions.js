import * as ACTIONS from 'constants/action_types'
import { fetchDBCategoryData } from 'services/api'

export const loadCategoryData = (categoryData, category) => ({
  type: ACTIONS.LOAD_CATEGORY_DATA,
  payload: categoryData,
  category
})

export const fetchCategoryData = category => dispatch => {
  return fetchDBCategoryData(category).then(categoryData => {
    return dispatch(loadCategoryData(categoryData, category))
  })
}
