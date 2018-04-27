import { createSelector } from 'reselect'

import CATEGORIES from 'constants/categories'

import {
  activeCategoryDataSelector,
  activeCategorySelector,
  activeItemIdSelector
} from 'Browse/selectors'

export const itemDataSelector = createSelector(
  [activeItemIdSelector, activeCategoryDataSelector],
  (activeItemId, activeCategoryData) => {
    const itemData = activeCategoryData.find(item => item.id === activeItemId)

    return itemData || {}
  }
)

export const itemIdTypeSelector = createSelector(
  [activeCategorySelector],
  activeCategory => {
    const { idType } = CATEGORIES.find(category => category.key === activeCategory)

    return idType
  }
)
