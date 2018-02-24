import { createSelector } from 'reselect'

const realmListSelector = state => state.import.realms

export const regionSelector = state => state.form.import.values.character.region

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
