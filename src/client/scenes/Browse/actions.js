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

// THUNKS

export const changeBrowsePage = ({ next }) => (_, getState) => {
  const state = getState()
  const category = activeCategorySelector(state)
  const content = activeContentSelector(state)

  const contentCount = CONTENT_ARR.length

  const newPage = next
    ? content === contentCount ? 1 : content + 1
    : content === 1 ? contentCount : content - 1

  history.push(`/browse/${category}/${newPage}`)
}

export const fetchCategoryData = category => dispatch => {
  return fetchDBCategoryData(category).then(categoryData => {
    return dispatch(loadCategoryData(categoryData, category))
  })
}
