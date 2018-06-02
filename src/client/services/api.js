import axios from 'axios'

import * as URLS from 'constants/api_urls'

export const fetchBattleNetCharacterData = params => {
  return axios
    .get(URLS.IMPORT_URL, { params })
    .then(res => res.data)
    .catch(err =>
      console.log(`Error fetching character data from BattleNet: ${err}`)
    )
}

export const fetchBattleNetRealmData = region => {
  return axios
    .get(URLS.REALM_URL, { params: { region } })
    .then(res => res.data)
    .catch(err =>
      console.log(`Error fetching realm data from BattleNet: ${err}`)
    )
}

export const fetchDBCategoryData = category => {
  return axios
    .get(URLS.CATEGORY_DATA_URL, { params: { category } })
    .then(res => res.data)
    .catch(err => console.log(`Error fetching category data from DB: ${err}`))
}

export const getCategoryData = () => {
  return axios.get(URLS.CATEGORY_DATA_URL).then(res => res.data)
}

export default {
  getCategoryData
}
