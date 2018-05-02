import sortBy from 'lodash/sortBy'

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
