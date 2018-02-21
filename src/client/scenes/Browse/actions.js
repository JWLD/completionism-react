import axios from 'axios'

import { ADD_CATEGORY_DATA } from 'constants/action_types'

const addCategoryData = (categoryData, category) => ({
  type: ADD_CATEGORY_DATA,
  payload: categoryData,
  category
})

export const fetchCategoryData = category => dispatch => {
  axios
    .get(`/api/db-category?q=${category}`)
    .then(response => dispatch(addCategoryData(response.data, category)))
    .catch(err => console.log(err.response.data || err))
}
