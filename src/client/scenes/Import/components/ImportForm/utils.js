import { fetchBattleNetCharacterData } from 'services/api'

const extractCategoriesArray = categories => {
  return Object.keys(categories).reduce((categoryNamesArray, key) => {
    const categoryIsSetToTrue = categories[key]

    if (categoryIsSetToTrue) {
      categoryNamesArray.push(key)
    }

    return categoryNamesArray
  }, [])
}

const constructUrlParams = ({ categories, character }) => ({
  cats: extractCategoriesArray(categories),
  name: character.name,
  realm: character.realm,
  region: character.region
})

const transformPetDataForStorage = petData => {
  return petData.reduce((acc, pet) => {
    acc[pet.id] = {
      level: pet.level,
      quality: pet.quality
    }

    return acc
  }, {})
}

const saveCharDataToLocalStorage = ({ char, collections }) => {
  return Object.keys(collections).map(key => {
    const collection =
      key === 'pets'
        ? transformPetDataForStorage(collections[key])
        : collections[key]

    localStorage[key] = JSON.stringify({ char, collection })
  })
}

export const fetchCharData = async values => {
  const urlParams = constructUrlParams(values)
  const characterData = await fetchBattleNetCharacterData(urlParams)

  return saveCharDataToLocalStorage(characterData)
}
