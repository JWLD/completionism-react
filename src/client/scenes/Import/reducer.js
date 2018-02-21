import { LOAD_REALM_DATA } from 'constants/action_types'

const initialState = {
  realms: {}
}

const importReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REALM_DATA:
      return {
        ...state,
        realms: { ...state.realms, [action.region]: action.payload }
      }
    default:
      return state
  }
}

export default importReducer
