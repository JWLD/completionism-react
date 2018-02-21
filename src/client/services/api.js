import axios from 'axios'

export const getBattleNetCharacterData = params =>
  new Promise((resolve, reject) =>
    axios
      .get('/api/import', { params })
      .then(res => resolve(res.data))
      .catch(err => console.log(`Error getting character data from BattleNet: ${err}`))
  )
