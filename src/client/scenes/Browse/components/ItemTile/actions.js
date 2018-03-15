import * as ACTIONS from 'constants/action_types'

export const setActiveItem = itemId => ({
  type: ACTIONS.SET_ACTIVE_ITEM,
  payload: itemId
})
