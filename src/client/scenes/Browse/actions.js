import * as ACTIONS from 'constants/action_types'
import { fetchDBCategoryData } from 'services/api'

export const addCategoryData = (categoryData, category) => ({
  type: ACTIONS.ADD_CATEGORY_DATA,
  payload: categoryData,
  category
})

export const resetFilter = () => ({
  type: ACTIONS.RESET_FILTER
})

export const setActiveItem = itemId => ({
  type: ACTIONS.SET_ACTIVE_ITEM,
  payload: itemId
})

export const setFilter = value => ({
  type: ACTIONS.SET_FILTER,
  payload: value
})

export const toggleControlPanel = () => ({
  type: ACTIONS.TOGGLE_CONTROL_PANEL
})

export const fetchCategoryData = category => dispatch => {
  return fetchDBCategoryData(category).then(categoryData => {
    return dispatch(addCategoryData(categoryData, category))
  })
}
