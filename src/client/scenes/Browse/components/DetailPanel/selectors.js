import { createSelector } from 'reselect'

import { categoryDataSelector } from 'scenes/Browse/selectors'

const activeItemIdSelector = state => state.browse.activeItemId

export const controlPanelSelector = state => state.browse.controlPanelIsActive

export const itemDataSelector = createSelector(
  [activeItemIdSelector, categoryDataSelector],
  (activeItemId, categoryData) => {
    const itemData = categoryData.find(item => item.id === activeItemId)

    return itemData || {}
  }
)
