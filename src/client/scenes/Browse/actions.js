import * as ACTIONS from 'constants/action_types'
import { CONTENT_ARR } from 'constants/content'
import history from 'services/history'
import { activeCategorySelector, activeContentSelector } from 'Browse/selectors'

export const setActiveCategory = category => ({
  type: ACTIONS.SET_ACTIVE_CATEGORY,
  category
})

export const setActiveContent = content => ({
  type: ACTIONS.SET_ACTIVE_CONTENT,
  content
})

export const setActiveItemId = itemId => ({
  type: ACTIONS.SET_ACTIVE_ITEM_ID,
  itemId
})

// THUNKS

export const changeActiveCategory = category => dispatch => {
  dispatch(resetActiveItemId())
  dispatch(setActiveCategory(category))
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

  dispatch(setActiveContent(newPage))
}

const resetActiveItemId = () => dispatch => {
  dispatch(setActiveItemId(0))
}
