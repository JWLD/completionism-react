import * as ACTIONS from 'constants/action_types'

// action creators

export const setFilter = value => ({
  type: ACTIONS.SET_FILTER,
  value
})

// thunks

export const resetFilter = () => dispatch => {
  dispatch(setFilter(''))
}
