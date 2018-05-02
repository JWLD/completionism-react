import { createSelector } from 'reselect'

import {
  activeCategoryDataSelector,
  activeCategorySelector,
  activeContentSelector
} from 'Browse/selectors'
import { filterValueSelector } from 'FilterBox/selectors'
import { SOURCES } from 'constants/sources'
import {
  checkFaction,
  checkFilterValue,
  sortItemBlocks,
  sortNonPets,
  sortPets
} from 'ItemList/helpers'
import {
  getCollectedIdsFromLocalStorage,
  getFactionFromLocalStorage,
  getPetCollectionFromLocalStorage
} from 'services/local_storage'

// ORGANISE FUNCTIONS

const organiseIntoSources = data => {
  return data.reduce((acc, item) => {
    const sourceType = SOURCES[item.source]
    const entry = acc.find(sources => sources.name === sourceType)

    if (!entry) {
      acc.push({
        name: sourceType,
        items: [item]
      })
    } else {
      const entryIndex = acc.indexOf(entry)

      acc[entryIndex].items.push(item)
    }

    return acc
  }, [])
}

const setSubs = items => {
  let subs = items.reduce((acc, item) => {
    const subType = item.sub1
    const entry = acc.find(subs => subs.name === subType)

    if (!entry) {
      acc.push({
        name: subType,
        items: [item]
      })
    } else {
      const entryIndex = acc.indexOf(entry)
      acc[entryIndex].items.push(item)
    }

    return acc
  }, [])

  subs = sortItemBlocks(subs)

  return subs
}

const organiseIntoSubs = data => {
  return data.reduce((acc, block) => {
    const newBlock = { ...block, subs: setSubs(block.items) }
    delete newBlock.items

    acc.push(newBlock)

    return acc
  }, [])
}

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
    let blocks = organiseIntoSources(items)
    blocks = sortItemBlocks(blocks)
    blocks = organiseIntoSubs(blocks)

    return blocks
  }
)

export const progressDataSelector = createSelector(
  [getItemsWithAdditionalData],
  items => {
    const collectedItems = items.filter(item => item.collected)

    return {
      count: collectedItems.length,
      total: items.length
    }
  }
)
