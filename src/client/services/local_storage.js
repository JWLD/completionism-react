import { FACTIONS } from 'constants/blizzard'

export const getCategoryDataFromLocalStorage = category => {
  const categoryData =
    localStorage.getItem(category) && JSON.parse(localStorage.getItem(category))

  return categoryData
}

export const getCharacterDataFromLocalStorage = category => {
  const categoryData = getCategoryDataFromLocalStorage(category)

  return categoryData && categoryData.char
}

export const getCollectedIdsFromLocalStorage = category => {
  const categoryData = getCategoryDataFromLocalStorage(category)

  return categoryData
    ? category === 'pets'
      ? Object.keys(categoryData.collection).map(key => Number(key))
      : categoryData.collection
    : []
}

export const getFactionFromLocalStorage = category => {
  const categoryData = getCategoryDataFromLocalStorage(category)

  return categoryData ? categoryData.char.faction : FACTIONS.NEUTRAL
}

export const getPetCollectionFromLocalStorage = () => {
  const petData = getCategoryDataFromLocalStorage('pets')

  return petData ? petData.collection : {}
}
