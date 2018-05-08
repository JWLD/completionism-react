import { createSelector } from 'reselect'

import { categoryDataSelector } from 'redux/selectors'
import { getCollectedIdsFromLocalStorage } from 'services/local_storage'

// BASE

const getCategory = (state, props) => props.category

// DERIVED

const getObtainableItems = createSelector(
  [getCategory, categoryDataSelector],
  (category, allCategoryData) => {
    const categoryData = allCategoryData[category]

    const obtainableItems = categoryData.filter(item => {
      return item.content >= 1 && item.content <= 8
    })

    return obtainableItems
  }
)

const getCollectedItemCount = createSelector(
  [getCategory, getObtainableItems],
  (category, obtainableItems) => {
    const collectedIds = getCollectedIdsFromLocalStorage(category)

    const collectedCount = obtainableItems.reduce((count, item) => {
      return collectedIds.includes(item.id) ? count + 1 : count
    }, 0)

    return collectedCount
  }
)

export const getProgressData = createSelector(
  [getCollectedItemCount, getObtainableItems],
  (collectedItemCount, obtainableItems) => ({
    count: collectedItemCount,
    total: obtainableItems.length
  })
)
