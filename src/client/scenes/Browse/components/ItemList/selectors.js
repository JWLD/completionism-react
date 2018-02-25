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

// SELECTORS

const contentParamSelector = (state, props) =>
  Number(props.match.params.content)

const factionSelector = createSelector([categoryParamSelector], category => {
  return localStorage[category]
    ? JSON.parse(localStorage[category]).char.faction
    : 2
})

const itemsSelectors = createSelector(
  [categoryDataSelector, contentParamSelector, factionSelector],
  (data, content, faction) => {
    data = filterByContent(data, content)
    data = filterByFaction(data, faction)
    data = sortItems(data)

    return data
  }
)

const itemBlocksSelector = createSelector([itemsSelectors], items => {
  let blocks = organiseIntoSubCategories(items)
  blocks = sortItemBlocks(blocks)

  return blocks
})

export const dataSelector = createSelector([itemBlocksSelector], data => data)
