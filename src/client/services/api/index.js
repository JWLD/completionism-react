import { API_URLS } from './constants'
import { makeRequest } from './helpers'

export const fetchAllCategoryData = () => {
  return makeRequest({
    method: 'get',
    url: API_URLS.CATEGORY
  })
}

export const fetchBattleNetCharacterData = params => {
  return makeRequest({
    method: 'get',
    params,
    url: API_URLS.IMPORT
  })
}

export const fetchBattleNetRealmData = region => {
  return makeRequest({
    method: 'get',
    params: { region },
    url: API_URLS.REALMS
  })
}
