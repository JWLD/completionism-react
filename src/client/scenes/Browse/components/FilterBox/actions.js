import * as ACTIONS from 'constants/action_types'

export const setFilter = value => ({
  type: ACTIONS.SET_FILTER_VALUE,
  value
})

// THUNKS

export const resetFilter = () => dispatch => {
  dispatch(setFilter(''))
}
