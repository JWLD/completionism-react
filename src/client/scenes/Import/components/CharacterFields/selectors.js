import { createSelector } from 'reselect'
import { formValueSelector } from 'redux-form'

const importFormSelector = formValueSelector('import')

const realmListSelector = state => state.import.realms

export const regionSelector = state =>
  importFormSelector(state, 'character.region')

const regionRealmsSelector = createSelector(
  [realmListSelector, regionSelector],
  (realmList, region) => realmList[region] || []
)

export const realmDataSelector = createSelector(
  [regionRealmsSelector],
  realms =>
    realms.reduce((realmList, realm) => {
      realmList[realm.slug] = realm.name

      return realmList
    }, {})
)
