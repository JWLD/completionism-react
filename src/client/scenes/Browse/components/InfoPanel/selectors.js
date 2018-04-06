import { createSelector } from 'reselect'

import { activeItemIdSelector, categoryDataSelector } from 'Browse/selectors'

export const itemDataSelector = createSelector(
  [activeItemIdSelector, categoryDataSelector],
  (activeItemId, categoryData) => {
    const itemData = categoryData.find(item => item.id === activeItemId)

    return itemData || {}
  }
)
