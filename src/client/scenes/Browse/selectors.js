import { createSelector } from 'reselect'

import { getCategoryData } from 'redux/selectors'

// BASE - STATE

export const activeCategorySelector = state => state.browse.activeCategory

export const activeContentSelector = state => state.browse.activeContent

export const activeItemIdSelector = state => state.browse.activeItemId

// BASE - PROPS

export const categoryParamSelector = (state, props) => props.match.params.category

export const contentParamSelector = (state, props) => Number(props.match.params.content)

// DERIVED

export const categoryDataExistsSelector = createSelector(
  [getCategoryData, categoryParamSelector],
  (categoryData, categoryParam) => {
    return categoryData[categoryParam] ? true : false
  }
)

export const activeCategoryDataSelector = createSelector(
  [getCategoryData, activeCategorySelector],
  (categoryData, activeCategory) => categoryData[activeCategory] || []
)
