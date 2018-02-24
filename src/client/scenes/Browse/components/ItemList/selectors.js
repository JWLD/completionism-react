import { createSelector } from 'reselect'

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

export const organiseIntoSubcats = data => {
  return data.reduce((acc, item) => {
    const sourceType = SOURCES[item.source]

    if (!acc[sourceType]) {
      acc[sourceType] = [item]
    } else {
      acc[sourceType].push(item)
    }

    return acc
  }, {})
}

// SELECTORS

const contentParamSelector = (state, props) =>
  Number(props.match.params.content)

const factionSelector = createSelector([categoryParamSelector], category => {
  return localStorage[category]
    ? JSON.parse(localStorage[category]).char.faction
    : 2
})

const filteredDataSelector = createSelector(
  [categoryDataSelector, contentParamSelector, factionSelector],
  (categoryData, content, faction) => {
    let filteredData = categoryData

    filteredData = filterByContent(filteredData, content)
    filteredData = filterByFaction(filteredData, faction)

    return filteredData
  }
)

const subCategoriesSelector = createSelector(
  [filteredDataSelector],
  filteredData => {
    let organisedData = filteredData

    organisedData = organiseIntoSubcats(organisedData)

    return organisedData
  }
)

export const dataSelector = createSelector(
  [subCategoriesSelector],
  data => data
)
