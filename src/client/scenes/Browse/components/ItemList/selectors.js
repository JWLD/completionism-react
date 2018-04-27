import { createSelector } from 'reselect'
import _ from 'lodash'

import {
  activeCategoryDataSelector,
  activeCategorySelector,
  activeContentSelector,
  filterSelector
} from 'Browse/selectors'
import { SOURCES } from 'constants/sources'

// FILTER FUNCTIONS

const filterByContent = (data, content) => {
  return data.filter(item => item.content === content)
}

const filterByFaction = (data, faction) => {
  return data.filter(item => {
    const factionIsNeutral = item.faction === 2

    return item.faction === faction || factionIsNeutral
  })
}

const filterByUserFilter = (data, filterValue) => {
  return data.filter(item => {
    const normalisedName = item.name.toLowerCase()
    const normalisedFilterValue = filterValue.toLowerCase()

    return normalisedName.includes(normalisedFilterValue)
  })
}

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

// SORT FUNCTIONS

const sortItems = data => {
  return _.sortBy(data, ['skill', 'quality', 'name'])
}

const sortPets = data => {
  return _.sortBy(data, ['name'])
}

const sortItemBlocks = data => {
  return _.sortBy(data, 'name')
}

// DATA FUNCTIONS

const addCollectedInfo = (data, collectedIds) => {
  return data.map(item => {
    if (collectedIds.includes(item.id)) {
      item.collected = true
    } else {
      item.collected = false
    }

    return item
  })
}

const updateItemQuality = (data, petQualityById) => {
  return data.map(item => {
    const quality = petQualityById[item.id]

    if (quality) {
      item.quality = quality
    }

    return item
  })
}

// LOCAL STORAGE SELECTORS

const petQualitySelector = createSelector([activeCategorySelector], category => {
  const data = localStorage[category] ? JSON.parse(localStorage[category]).ids : []

  return data.reduce((acc, item) => {
    acc[item.id] = item.quality

    return acc
  }, {})
})

const collectedIdsSelector = createSelector([activeCategorySelector], category => {
  const data = localStorage[category] && JSON.parse(localStorage[category])

  if (!data) return []

  const ids = category === 'pets' ? data.ids.map(item => item.id) : data.ids

  return ids
})

const factionSelector = createSelector([activeCategorySelector], category => {
  return localStorage[category] ? JSON.parse(localStorage[category]).char.faction : 2
})

const addPetLevel = data => {
  const localPetData = JSON.parse(localStorage.getItem('pets'))

  const petLevelById = localPetData.ids.reduce((acc, pet) => {
    acc[pet.id] = pet.level

    return acc
  }, {})

  const newData = data.map(item => {
    item.level = petLevelById[item.id]

    return item
  })

  return newData
}

// REGULAR SELECTORS

const itemsSelector = createSelector(
  [
    activeCategoryDataSelector,
    activeCategorySelector,
    activeContentSelector,
    factionSelector,
    filterSelector,
    collectedIdsSelector,
    petQualitySelector
  ],
  (data, category, content, faction, filterValue, collectedIds, petQualityById) => {
    data = filterByContent(data, content)
    data = filterByFaction(data, faction)
    data = filterByUserFilter(data, filterValue)

    if (category === 'pets') {
      data = sortPets(data)
    } else {
      data = sortItems(data)
    }

    data = addCollectedInfo(data, collectedIds)

    if (category === 'pets') {
      data = updateItemQuality(data, petQualityById)
      data = addPetLevel(data)
    }

    return data
  }
)

export const itemBlocksSelector = createSelector([itemsSelector], items => {
  let blocks = organiseIntoSources(items)
  blocks = sortItemBlocks(blocks)
  blocks = organiseIntoSubs(blocks)

  return blocks
})

export const progressDataSelector = createSelector([itemsSelector], items => {
  const collectedItems = items.filter(item => item.collected)

  return {
    count: collectedItems.length,
    total: items.length
  }
})
