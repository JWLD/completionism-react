import { createSelector } from 'reselect'

import { categoryDataSelector } from 'redux/selectors'

// STATE

export const activeCategorySelector = state => state.browse.activeCategory

export const activeContentSelector = state => state.browse.activeContent

export const activeItemIdSelector = state => state.browse.activeItemId

export const controlPanelIsActiveSelector = state =>
  state.browse.controlPanelIsActive

export const filterSelector = state => state.browse.filter

export const viewModeListSelector = state => state.browse.viewModeList

// PROPS

export const categoryParamSelector = (state, props) =>
  props.match.params.category

export const contentParamSelector = (state, props) =>
  Number(props.match.params.content)

// DERIVED

export const categoryDataExistsSelector = createSelector(
  [categoryDataSelector, categoryParamSelector],
  (categoryData, categoryParam) => {
    return categoryData[categoryParam] ? true : false
  }
)

export const activeCategoryDataSelector = createSelector(
  [categoryDataSelector, categoryParamSelector],
  (categoryData, categoryParam) => categoryData[categoryParam] || []
)
