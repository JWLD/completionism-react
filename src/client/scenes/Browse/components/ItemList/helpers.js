import sortBy from 'lodash/sortBy'

import { SOURCES } from 'constants/sources'

// FILTERING HELPERS

export const checkFaction = (itemFaction, faction) => {
  const factionIsNeutral = itemFaction === 2

  return itemFaction === faction || factionIsNeutral
}

export const checkFilterValue = (itemName, filterValue) => {
  const normalisedName = itemName.toLowerCase()
  const normalisedFilterValue = filterValue.toLowerCase()

  return normalisedName.includes(normalisedFilterValue)
}

// ORGANISING HELPERS

const organiseIntoSubCategoryBlocks = ({ items, source }) => {
  const sourceItems = items.filter(item => item.source === source)

  const subCategoryBlocks = sourceItems.reduce((acc, item) => {
    const blockExists = acc.find(block => block.name === item.sub1)

    if (!blockExists) {
      const subCategoryItems = items.filter(foo => foo.sub1 === item.sub1)

      acc.push({
        name: item.sub1,
        items: subCategoryItems
      })
    }

    return acc
  }, [])

  const sortedBlocks = sortItemBlocks(subCategoryBlocks)

  return sortedBlocks
}

export const organiseIntoSourceBlocks = items => {
  const sourceBlocks = items.reduce((acc, item) => {
    const sourceType = SOURCES[item.source]
    const blockExists = acc.find(block => block.name === sourceType)

    if (!blockExists) {
      acc.push({
        name: sourceType,
        items: organiseIntoSubCategoryBlocks({ items, source: item.source })
      })
    }

    return acc
  }, [])

  const sortedBlocks = sortItemBlocks(sourceBlocks)

  return sortedBlocks
}

// SORTING HELPERS

export const sortItemBlocks = data => {
  return sortBy(data, 'name')
}

export const sortNonPets = data => {
  return sortBy(data, ['skill', 'quality', 'name'])
}

export const sortPets = data => {
  return sortBy(data, ['name'])
}
