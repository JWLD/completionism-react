import { createSelector } from 'reselect'

import {
  activeItemIdSelector,
  activeCategoryDataSelector
} from 'Browse/selectors'

export const itemDataSelector = createSelector(
  [activeItemIdSelector, activeCategoryDataSelector],
  (activeItemId, categoryData) => {
    const itemData = categoryData.find(item => item.id === activeItemId)

    return itemData || {}
  }
)
