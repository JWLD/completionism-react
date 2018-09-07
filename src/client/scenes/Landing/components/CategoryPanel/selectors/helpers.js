import { getCollectedIdsFromLocalStorage } from 'services/local_storage'

const filterObtainableItems = ({ category, categoryData }) => {
  const specificCategoryData = categoryData[category]

  const obtainableItems = specificCategoryData.filter(item => {
    return item.content >= 1 && item.content <= 8
  })

  return obtainableItems
}

const countCollectedItems = ({ category, obtainableItems }) => {
  const collectedIds = getCollectedIdsFromLocalStorage(category)

  const collectedCount = obtainableItems.reduce((count, item) => {
    return collectedIds.includes(item.id) ? count + 1 : count
  }, 0)

  return collectedCount
}

export const extractProgressData = ({ category, categoryData }) => {
  const obtainableItems = filterObtainableItems({ category, categoryData })
  const collectedItemCount = countCollectedItems({ category, obtainableItems })

  return {
    count: collectedItemCount,
    total: obtainableItems.length
  }
}
