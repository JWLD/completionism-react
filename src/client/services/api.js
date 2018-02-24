import axios from 'axios'

import * as URLS from 'constants/api_urls'

export const fetchBattleNetCharacterData = params => {
  return axios
    .get(URLS.IMPORT_URL, { params })
    .then(res => {
      if (process.NODE_ENV === 'dev') {
        console.log('Success fetching character data from BattleNet!')
      }

      return res.data
    })
    .catch(err =>
      console.log(`Error fetching character data from BattleNet: ${err}`)
    )
}

export const fetchBattleNetRealmData = region => {
  return axios
    .get(URLS.REALM_URL, { params: { region } })
    .then(res => {
      if (process.NODE_ENV === 'dev') {
        console.log('Success fetching realm data from BattleNet!')
      }

      return res.data
    })
    .catch(err =>
      console.log(`Error fetching realm data from BattleNet: ${err}`)
    )
}
