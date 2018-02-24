import axios from 'axios'

import * as URLS from 'constants/api_urls'

export const fetchBattleNetCharacterData = params => {
  return new Promise(resolve =>
    axios
      .get(URLS.IMPORT_URL, {
        params
      })
      .then(res => resolve(res.data))
      .catch(err =>
        console.log(`Error fetching character data from BattleNet: ${err}`)
      )
  )
}

export const fetchBattleNetRealmData = region => {
  return new Promise(resolve => {
    axios
      .get(URLS.REALM_URL, {
        params: {
          region
        }
      })
      .then(res => resolve(res.data))
      .catch(err =>
        console.log(`Error fetching realm data from BattleNet: ${err}`)
      )
  })
}
