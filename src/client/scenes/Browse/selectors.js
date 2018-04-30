import { createSelector } from 'reselect'

import { categoryDataSelector } from 'redux/selectors'

// BASE - STATE

export const activeCategorySelector = state => state.browse.activeCategory

export const activeContentSelector = state => state.browse.activeContent

export const activeItemIdSelector = state => state.browse.activeItemId

// BASE - PROPS

export const categoryParamSelector = (state, props) => props.match.params.category

export const contentParamSelector = (state, props) => Number(props.match.params.content)

// DERIVED

export const categoryDataExistsSelector = createSelector(
  [categoryDataSelector, categoryParamSelector],
  (categoryData, categoryParam) => {
    return categoryData[categoryParam] ? true : false
  }
)

export const activeCategoryDataSelector = createSelector(
  [categoryDataSelector, activeCategorySelector],
  (categoryData, activeCategory) => categoryData[activeCategory] || []
)
