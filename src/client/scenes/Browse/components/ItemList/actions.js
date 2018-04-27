import * as ACTIONS from 'constants/action_types'

export const openInfoPanel = () => ({
  type: ACTIONS.OPEN_INFO_PANEL
})

export const setActiveItemId = itemId => ({
  type: ACTIONS.SET_ACTIVE_ITEM_ID,
  payload: itemId
})

export const setActiveItem = itemId => dispatch => {
  dispatch(setActiveItemId(itemId))
  dispatch(openInfoPanel())
}
