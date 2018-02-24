import axios from 'axios'

export const fetchBattleNetCharacterData = params => {
  return new Promise(resolve =>
    axios
      .get('/api/import', {
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
      .get('/api/realms', {
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
