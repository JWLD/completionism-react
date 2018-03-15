import * as ACTIONS from 'constants/action_types'

export const resetFilter = () => ({
  type: ACTIONS.RESET_FILTER
})

export const setFilter = value => ({
  type: ACTIONS.SET_FILTER,
  value
})
