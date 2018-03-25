import { createSelector } from 'reselect'

export const activeCategorySelector = state => state.browse.activeCategory

export const activeContentSelector = state => state.browse.activeContent

const browseStateSelector = state => state.browse

export const categoryParamSelector = (state, props) =>
  props.match.params.category

export const contentParamSelector = (state, props) =>
  Number(props.match.params.content)

export const viewModeListSelector = state => state.browse.viewModeList

export const categoryDataExistsSelector = createSelector(
  [browseStateSelector, categoryParamSelector],
  (browseState, categoryParam) => {
    return browseState[categoryParam] ? true : false
  }
)

export const categoryDataSelector = createSelector(
  [browseStateSelector, categoryParamSelector],
  (browseState, categoryParam) => browseState[categoryParam] || []
)
