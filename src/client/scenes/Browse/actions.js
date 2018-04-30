import * as ACTIONS from 'constants/action_types'
import { CONTENT_ARR } from 'constants/content'
import history from 'services/history'
import { activeCategorySelector, activeContentSelector } from 'Browse/selectors'

export const changeActiveContent = content => ({
  type: ACTIONS.UPDATE_ACTIVE_CONTENT,
  content
})

export const updateActiveCategory = category => ({
  type: ACTIONS.UPDATE_ACTIVE_CATEGORY,
  category
})

// THUNKS

export const setActiveItemId = itemId => ({
  type: ACTIONS.SET_ACTIVE_ITEM_ID,
  payload: itemId
})

const resetActiveItemId = () => dispatch => {
  dispatch(setActiveItemId(0))
}

export const changeActiveCategory = category => dispatch => {
  dispatch(resetActiveItemId())
  dispatch(updateActiveCategory(category))
}

export const changeBrowsePage = ({ next }) => (dispatch, getState) => {
  const category = activeCategorySelector(getState())
  const currentPage = activeContentSelector(getState())

  const lastPage = CONTENT_ARR.length

  const newPage = next
    ? currentPage === lastPage
      ? 1
      : currentPage + 1
    : currentPage === 1
      ? lastPage
      : currentPage - 1

  history.push(`/browse/${category}/${newPage}`)

  dispatch(changeActiveContent(newPage))
}
