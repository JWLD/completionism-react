import axios from 'axios'

export const ADD_REALM_DATA = 'ADD_REALM_DATA'

export const getRealmData = (realmData, region) => ({
  type: ADD_REALM_DATA,
  payload: realmData,
  region
})

export const fetchRealmData = region => dispatch => {
  axios
    .get(`/api/realms?q=${region}`)
    .then(response => {
      dispatch(getRealmData(response.data, region))
    })
    .catch(err => console.log(err))
}
