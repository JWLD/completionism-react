import * as ACTIONS from 'constants/action_types'
import { CONTENT_ARR } from 'constants/content'
import { fetchDBCategoryData } from 'services/api'
import history from 'lib/history'
import { activeCategorySelector, activeContentSelector } from 'Browse/selectors'

export const changeActiveCategory = category => ({
  type: ACTIONS.UPDATE_ACTIVE_CATEGORY,
  category
})

export const changeActiveContent = content => ({
  type: ACTIONS.UPDATE_ACTIVE_CONTENT,
  content
})

export const loadCategoryData = (categoryData, category) => ({
  type: ACTIONS.LOAD_CATEGORY_DATA,
  payload: categoryData,
  category
})

export const setActiveItemId = itemId => ({
  type: ACTIONS.SET_ACTIVE_ITEM_ID,
  payload: itemId
})

// THUNKS

export const changeBrowsePage = ({ next }) => (_, getState) => {
  const state = getState()
  const category = activeCategorySelector(state)
  const currentPage = activeContentSelector(state)

  const lastPage = CONTENT_ARR.length

  const newPage = next
    ? currentPage === lastPage ? 1 : currentPage + 1
    : currentPage === 1 ? lastPage : currentPage - 1

  history.push(`/browse/${category}/${newPage}`)
}

export const fetchCategoryData = category => dispatch => {
  return fetchDBCategoryData(category).then(categoryData => {
    return dispatch(loadCategoryData(categoryData, category))
  })
}
