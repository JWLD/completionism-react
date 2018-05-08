import { createSelector } from 'reselect'

import {
  activeCategoryDataSelector,
  activeCategorySelector,
  activeContentSelector
} from 'Browse/selectors'
import { filterValueSelector } from 'FilterBox/selectors'
import {
  checkFaction,
  checkFilterValue,
  organiseIntoSourceBlocks,
  sortNonPets,
  sortPets
} from 'ItemList/helpers'
import {
  getCollectedIdsFromLocalStorage,
  getFactionFromLocalStorage,
  getPetCollectionFromLocalStorage
} from 'services/local_storage'

// DERIVED SELECTORS

const getFilteredItems = createSelector(
  [
    activeCategorySelector,
    activeCategoryDataSelector,
    activeContentSelector,
    filterValueSelector
  ],
  (activeCategory, activeCategoryData, activeContent, filterValue) => {
    const faction = getFactionFromLocalStorage(activeCategory)

    const filteredItems = activeCategoryData.filter(item => {
      const itemMatchesContent = item.content === activeContent
      const itemMatchesFaction = checkFaction(item.faction, faction)
      const itemMatchesFilterValue = checkFilterValue(item.name, filterValue)

      return itemMatchesContent && itemMatchesFaction && itemMatchesFilterValue
    })

    return filteredItems
  }
)

const getSortedItems = createSelector(
  [getFilteredItems, activeCategorySelector],
  (items, category) => {
    return category === 'pets' ? sortPets(items) : sortNonPets(items)
  }
)

const getItemsWithAdditionalData = createSelector(
  [getSortedItems, activeCategorySelector],
  (items, category) => {
    const collectedIds = getCollectedIdsFromLocalStorage(category)
    const petData = category === 'pets' && getPetCollectionFromLocalStorage()

    const itemsWithAdditionalData = items.map(item => {
      item.collected = collectedIds.includes(item.id)

      if (category === 'pets' && petData[item.id]) {
        item.level = petData[item.id].level
        item.quality = petData[item.id].quality
      }

      return item
    })

    return itemsWithAdditionalData
  }
)

export const itemBlocksSelector = createSelector(
  [getItemsWithAdditionalData],
  items => {
    const itemBlocks = organiseIntoSourceBlocks(items)

    return itemBlocks
  }
)

export const progressDataSelector = createSelector(
  [getItemsWithAdditionalData],
  items => {
    const collectedItemCount = items.reduce((count, item) => {
      return item.collected ? count + 1 : count
    }, 0)

    return {
      count: collectedItemCount,
      total: items.length
    }
  }
)
