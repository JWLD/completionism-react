import * as ACTIONS from 'constants/action_types'
import { setActiveItemId } from 'Browse/actions'

export const openInfoPanel = () => ({
  type: ACTIONS.OPEN_INFO_PANEL
})

export const setActiveItem = itemId => dispatch => {
  dispatch(setActiveItemId(itemId))
  dispatch(openInfoPanel())
}
