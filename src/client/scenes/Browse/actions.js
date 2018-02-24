import axios from 'axios'

import * as ACTIONS from 'constants/action_types'

const addCategoryData = (categoryData, category) => ({
  type: ACTIONS.ADD_CATEGORY_DATA,
  payload: categoryData,
  category
})

export const resetFilter = () => ({
  type: ACTIONS.RESET_FILTER
})

export const setFilter = value => ({
  type: ACTIONS.SET_FILTER,
  payload: value
})

export const fetchCategoryData = category => dispatch => {
  axios
    .get(`/api/db-category?q=${category}`)
    .then(response => dispatch(addCategoryData(response.data, category)))
    .catch(err => console.log(err.response.data || err))
}
