import { createSelector } from 'reselect'

export const categoryParamSelector = (state, props) =>
  props.match.params.category

const browseStateSelector = state => state.browse

export const categoryDataExistsSelector = createSelector(
  [browseStateSelector, categoryParamSelector],
  (browseState, categoryParam) => (browseState[categoryParam] ? true : false)
)
