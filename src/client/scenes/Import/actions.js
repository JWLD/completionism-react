import { ADD_REALM_DATA } from 'constants/action_types'
import { fetchBattleNetRealmData } from 'services/api'

export const addRealmData = (realmData, region) => ({
  type: ADD_REALM_DATA,
  payload: realmData,
  region
})

export const fetchRealmData = region => async dispatch => {
  const realmData = await fetchBattleNetRealmData(region)

  dispatch(addRealmData(realmData, region))
}
