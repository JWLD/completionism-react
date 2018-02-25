import { createSelector } from 'reselect'
import _ from 'lodash'

import {
  categoryParamSelector,
  categoryDataSelector
} from 'scenes/Browse/selectors'
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

const organiseIntoSubCategories = data => {
  return data.reduce((acc, item) => {
    const sourceType = SOURCES[item.source]
    const entry = acc.find(subCategory => subCategory.name === sourceType)

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

// SORT FUNCTIONS

const sortItems = data => {
  return _.sortBy(data, ['skill', 'quality', 'name'])
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

// LOCAL STORAGE SELECTORS

const collectedIdsSelector = createSelector(
  [categoryParamSelector],
  category => {
    return localStorage[category] ? JSON.parse(localStorage[category]).ids : []
  }
)

const factionSelector = createSelector([categoryParamSelector], category => {
  return localStorage[category]
    ? JSON.parse(localStorage[category]).char.faction
    : 2
})

// REGULAR SELECTORS

const filterValueSelector = state => state.browse.filter

const contentParamSelector = (state, props) =>
  Number(props.match.params.content)

const itemsSelector = createSelector(
  [
    categoryDataSelector,
    contentParamSelector,
    factionSelector,
    filterValueSelector,
    collectedIdsSelector
  ],
  (data, content, faction, filterValue, collectedIds) => {
    data = filterByContent(data, content)
    data = filterByFaction(data, faction)
    data = filterByUserFilter(data, filterValue)
    data = sortItems(data)
    data = addCollectedInfo(data, collectedIds)

    return data
  }
)

export const itemBlocksSelector = createSelector([itemsSelector], items => {
  let blocks = organiseIntoSubCategories(items)
  blocks = sortItemBlocks(blocks)

  return blocks
})

export const progressDataSelector = createSelector([itemsSelector], items => {
  const collectedItems = items.filter(item => item.collected)

  return {
    count: collectedItems.length,
    total: items.length
  }
})
