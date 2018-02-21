import { ADD_REALM_DATA } from './actions'

const initialState = {
  realms: {}
}

const importReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REALM_DATA:
      return {
        ...state,
        realms: { ...state.realms, [action.region]: action.payload }
      }
    default:
      return state
  }
}

export default importReducer
