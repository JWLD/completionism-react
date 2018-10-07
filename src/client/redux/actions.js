import * as ACTIONS from 'constants/action_types'
import { fetchAllCategoryData } from 'services/api'

export const setCategoryData = data => ({
  type: ACTIONS.SET_CATEGORY_DATA,
  data
})

export const fetchCategoryData = () => async dispatch => {
  const categoryData = await fetchAllCategoryData()

  dispatch(setCategoryData(categoryData))
}
