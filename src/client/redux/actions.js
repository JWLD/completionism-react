import * as ACTIONS from 'constants/action_types'
import api from 'services/api'

export const setCategoryData = data => ({
  type: ACTIONS.SET_CATEGORY_DATA,
  data
})

export const fetchCategoryData = () => dispatch => {
  return api
    .getCategoryData()
    .then(data => {
      console.log(data)
      dispatch(setCategoryData(data))
    })
    .catch(err => console.log(err))
}
