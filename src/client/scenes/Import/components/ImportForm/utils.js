import { getBattleNetCharacterData } from 'services/api'

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

const saveCharDataToLocalStorage = ({ char, collections }) => {
  return Object.keys(collections).map(key => {
    localStorage[key] = JSON.stringify({
      char,
      ids: collections[key]
    })
  })
}

export const fetchCharData = values => {
  const urlParams = constructUrlParams(values)

  getBattleNetCharacterData(urlParams).then(characterData => {
    saveCharDataToLocalStorage(characterData)
  })
}
