import { createSelector } from 'reselect'

import { activeItemIdSelector, activeCategoryDataSelector } from 'Browse/selectors'

export const itemDataSelector = createSelector(
  [activeItemIdSelector, activeCategoryDataSelector],
  (activeItemId, activeCategoryData) => {
    const itemData = activeCategoryData.find(item => item.id === activeItemId)

    return itemData || {}
  }
)
