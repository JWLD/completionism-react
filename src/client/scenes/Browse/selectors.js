import { createSelector } from 'reselect'

// STATE

const browseStateSelector = state => state.browse

export const activeCategorySelector = state => state.browse.activeCategory

export const activeContentSelector = state => state.browse.activeContent

export const activeItemIdSelector = state => state.browse.activeItemId

export const controlPanelIsActiveSelector = state => state.browse.controlPanelIsActive

export const filterSelector = state => state.browse.filter

export const viewModeListSelector = state => state.browse.viewModeList

// PROPS

export const categoryParamSelector = (state, props) =>
  props.match.params.category

export const contentParamSelector = (state, props) =>
  Number(props.match.params.content)

// DERIVED

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
